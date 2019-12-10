//! Broadcast channel

#![allow(warnings)]

use crate::loom::cell::CausalCell;
use crate::loom::future::AtomicWaker;
use crate::loom::sync::{Mutex, Arc, Condvar};
use crate::loom::sync::atomic::{AtomicBool, AtomicPtr, AtomicUsize, spin_loop_hint};

use std::fmt;
use std::ptr::{self, NonNull};
use std::sync::atomic::Ordering::SeqCst;
use std::task::{Context, Poll, Waker};
use std::usize;

/// Broadcast values to all subscribed receivers
pub struct Sender<T> {
    shared: Arc<Shared<T>>,
}

/// Receive values
pub struct Receiver<T> {
    /// State shared with all receivers and senders.
    shared: Arc<Shared<T>>,

    /// Next position to read from
    next: u64,

    /// Waiter state
    wait: Arc<WaitNode>,
}

#[derive(Debug)]
pub struct SendError<T>(pub T);

#[derive(Debug)]
pub enum RecvError {
    /// There are no more senders
    Closed,

    /// The receiver lagged too far behind and has been forcibly disconnected.
    Lagged,
}

#[derive(Debug)]
pub enum TryRecvError {
    Empty,
    Closed,
    Lagged,
}

/// Data shared between senders and receivers
struct Shared<T> {
    /// slots in the channel
    buffer: Box<[Slot<T>]>,

    /// Mask a position -> index
    mask: usize,

    /// Tail of the queue
    tail: Mutex<Tail>,

    /// Notifies a sender that the slot is unlocked
    condvar: Condvar,

    /// Stack of pending waiters
    wait_stack: AtomicPtr<WaitNode>,

    /// Number of outstanding Sender handles
    num_tx: AtomicUsize,
}

/// Next position to write a value
struct Tail {
    /// Next position to write to
    pos: u64,

    /// Number of active receivers
    rx_cnt: usize,
}

/// Node in the linked list
struct Slot<T> {
    /// Remaining numer of senders that are expected to see this value.
    ///
    /// When this goes to zero, the value is released.
    rem: AtomicUsize,

    /// Used to lock the `write` field.
    lock: AtomicUsize,

    /// The value being broadcast
    ///
    /// Synchronized by `state`
    write: CausalCell<Write<T>>,
}

/// A write in the buffer
struct Write<T> {
    /// Uniquely identifies this wrote
    pos: u64,

    /// The written value
    val: Option<T>,
}

/// Tracks a waiting receiver
#[derive(Debug)]
struct WaitNode {
    /// True if queued
    queued: AtomicBool,

    /// Task to wake when a permit is made available.
    waker: AtomicWaker,

    /// Next pointer in the stack of waiting senders.
    next: CausalCell<*const WaitNode>,
}

struct RecvGuard<'a, T> {
    slot: &'a Slot<T>,
    condvar: &'a Condvar,
}

/// Max number of receivers. Reserve space to lock.
const MAX_RECEIVERS: usize = usize::MAX >> 1;

pub fn channel<T>(mut capacity: usize) -> (Sender<T>, Receiver<T>) {
    assert!(capacity > 0, "capacity is empty");
    assert!(capacity <= usize::MAX >> 1, "requested capacity too large");

    // Round to a power of two
    capacity = capacity.next_power_of_two();

    let mut buffer = Vec::with_capacity(capacity);

    for i in 0..capacity {
        buffer.push(Slot {
            rem: AtomicUsize::new(0),
            lock: AtomicUsize::new(0),
            write: CausalCell::new(Write {
                pos: (i as u64).wrapping_sub(capacity as u64),
                val: None,
            }),
        });
    }

    let shared = Arc::new(Shared {
        buffer: buffer.into_boxed_slice(),
        mask: capacity - 1,
        tail: Mutex::new(Tail {
            pos: 0,
            rx_cnt: 1,
        }),
        condvar: Condvar::new(),
        wait_stack: AtomicPtr::new(ptr::null_mut()),
        num_tx: AtomicUsize::new(1),
    });

    let rx = Receiver {
        shared: shared.clone(),
        next: 0,
        wait: Arc::new(WaitNode {
            queued: AtomicBool::new(false),
            waker: AtomicWaker::new(),
            next: CausalCell::new(ptr::null()),
        }),
    };

    let tx = Sender {
        shared,
    };

    (tx, rx)
}

unsafe impl<T: Send> Send for Sender<T> {}
unsafe impl<T: Send> Sync for Sender<T> {}

unsafe impl<T: Send> Send for Receiver<T> {}
unsafe impl<T: Send> Sync for Receiver<T> {}

impl<T> Sender<T> {
    pub fn send(&self, value: T) -> Result<(), SendError<T>> {
        self.send2(Some(value))
            .map_err(|SendError(maybe_v)| SendError(maybe_v.unwrap()))
    }

    pub fn subscribe(&self) -> Receiver<T> {
        let shared = self.shared.clone();

        let mut tail = shared.tail.lock().unwrap();

        tail.rx_cnt = tail.rx_cnt.checked_add(1).expect("overflow");
        let next = tail.pos;

        drop(tail);

        Receiver {
            shared,
            next,
            wait: Arc::new(WaitNode {
                queued: AtomicBool::new(false),
                waker: AtomicWaker::new(),
                next: CausalCell::new(ptr::null()),
            }),
        }
    }

    /// Returns the number of active receivers
    pub fn receiver_count(&self) -> usize {
        let tail = self.shared.tail.lock().unwrap();
        tail.rx_cnt
    }

    fn send2(&self, value: Option<T>) -> Result<(), SendError<Option<T>>> {
        let mut tail = self.shared.tail.lock().unwrap();

        if tail.rx_cnt == 0 {
            return Err(SendError(value));
        }

        // Position to write into
        let pos = tail.pos;
        let rem = tail.rx_cnt;
        let idx = (pos & self.shared.mask as u64) as usize;

        // Update the tail position
        tail.pos = tail.pos.wrapping_add(1);

        // Get the slot
        let slot = &self.shared.buffer[idx];

        // Acquire the write lock
        let mut prev = slot.lock.fetch_add(1, SeqCst);

        while prev & !1 != 0 {
            // Concurrent readers, we must go to sleep
            tail = self.shared.condvar.wait(tail).unwrap();

            prev = slot.lock.load(SeqCst);
        }

        // Release the mutex
        drop(tail);

        // Slot lock acquired
        slot.write.with_mut(|ptr| {
            let write = unsafe { &mut *ptr };

            write.pos = pos;
            write.val = value;
        });

        // Set remaining receivers
        slot.rem.store(rem, SeqCst);

        // Release the slot lock
        slot.lock.store(0, SeqCst);

        // Notify waiting receivers
        self.notify_rx();

        Ok(())
    }

    fn notify_rx(&self) {
        let mut curr = self.shared.wait_stack.swap(ptr::null_mut(), SeqCst) as *const WaitNode;

        while !curr.is_null() {
            let waiter = unsafe { Arc::from_raw(curr) };

            // Update `curr` before toggling `queued` and waking
            curr = waiter.next.with(|ptr| unsafe { *ptr });

            // Unset queued
            waiter.queued.store(false, SeqCst);

            // Wake
            waiter.waker.wake();
        }
    }
}

impl<T> Clone for Sender<T> {
    fn clone(&self) -> Sender<T> {
        let shared = self.shared.clone();
        shared.num_tx.fetch_add(1, SeqCst);

        Sender { shared }
    }
}

impl<T> Drop for Sender<T> {
    fn drop(&mut self) {
        if 1 == self.shared.num_tx.fetch_sub(1, SeqCst) {
            let _ = self.send2(None);
        }
    }
}

impl<T> Receiver<T> {
    /// Lock the next value if there is one.
    ///
    /// The caller is responsible for unlocking
    fn recv_ref(&mut self) -> Result<RecvGuard<'_, T>, TryRecvError> {
        let idx = (self.next & self.shared.mask as u64) as usize;

        // The slot holding the next value to read
        let slot = &self.shared.buffer[idx];

        // Lock the slot
        if !slot.try_rx_lock() {
            return Err(TryRecvError::Empty);
        }

        let guard = RecvGuard {
            slot,
            condvar: &self.shared.condvar,
        };

        if guard.pos() != self.next {
            let pos = guard.pos();

            guard.drop_no_rem_dec();

            if pos.wrapping_add(self.shared.buffer.len() as u64) == self.next {
                return Err(TryRecvError::Empty);
            } else {
                let tail = self.shared.tail.lock().unwrap();

                // `tail.pos` points to the slot the **next** send writes to.
                // Because a receiver is lagging, this slot also holds the
                // oldest value. To make the positions match, we subtract the
                // capacity.
                self.next = tail.pos.wrapping_sub(self.shared.buffer.len() as u64);

                return Err(TryRecvError::Lagged);
            }
        }

        self.next = self.next.wrapping_add(1);

        Ok(guard)
    }
}

impl<T> Receiver<T>
where
    T: Clone,
{
    pub fn try_recv(&mut self) -> Result<T, TryRecvError> {
        let guard = self.recv_ref()?;

        if let Some(value) = guard.clone_value() {
            Ok(value)
        } else {
            Err(TryRecvError::Closed)
        }
    }

    pub fn poll_recv(&mut self, cx: &mut Context<'_>) -> Poll<Result<T, RecvError>> {
        if let Some(value) = ok_empty(self.try_recv())? {
            return Poll::Ready(Ok(value));
        }

        self.register_waker(cx.waker());

        if let Some(value) = ok_empty(self.try_recv())? {
            Poll::Ready(Ok(value))
        } else {
            Poll::Pending
        }
    }

    /// Receive the next value
    pub async fn recv(&mut self) -> Result<T, RecvError> {
        use crate::future::poll_fn;

        poll_fn(|cx| self.poll_recv(cx)).await
    }

    fn register_waker(&self, cx: &Waker) {
        self.wait.waker.register_by_ref(cx);

        if !self.wait.queued.load(SeqCst) {
            // Set `queued` before queuing.
            self.wait.queued.store(true, SeqCst);

            let mut curr = self.shared.wait_stack.load(SeqCst);
            let node = Arc::into_raw(self.wait.clone()) as *mut _;

            loop {
                // Safety: `queued == false` means the caller has exclusive
                // access to `self.wait.next`.
                self.wait.next.with_mut(|ptr| unsafe { *ptr = curr });

                let res = self.shared.wait_stack.compare_exchange(curr, node, SeqCst, SeqCst);

                match res {
                    Ok(_) => return,
                    Err(actual) => curr = actual,
                }
            }
        }
    }
}

impl<T> Drop for Receiver<T> {
    fn drop(&mut self) {
        let mut tail = self.shared.tail.lock().unwrap();

        tail.rx_cnt -= 1;
        let until = tail.pos;

        drop(tail);

        while self.next != until {
            match self.recv_ref() {
                // Ignore the value
                Ok(_) => {}
                // The channel is closed
                Err(TryRecvError::Closed) => break,
                // Ignore lagging, we will catch up
                Err(TryRecvError::Lagged) => {}
                // Can't be empty
                Err(TryRecvError::Empty) => panic!("unexpected empty broadcast channel"),
            }
        }
    }
}

impl<T> Drop for Shared<T> {
    fn drop(&mut self) {
        // Clear the wait stack
        let mut curr = *self.wait_stack.get_mut() as *const WaitNode;

        while !curr.is_null() {
            let waiter = unsafe { Arc::from_raw(curr) };
            curr = waiter.next.with(|ptr| unsafe { *ptr });
        }
    }
}

impl<T> fmt::Debug for Sender<T> {
    fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(fmt, "broadcast::Sender")
    }
}

impl<T> fmt::Debug for Receiver<T> {
    fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(fmt, "broadcast::Receiver")
    }
}

impl<T> Slot<T> {
    /// Try to lock the slot for a receiver. If `false`, then a sender holds the
    /// lock and the calling task will be notified once the sender has released
    /// the lock.
    fn try_rx_lock(&self) -> bool {
        let mut curr = self.lock.load(SeqCst);

        loop {
            if curr & 1 == 1 {
                // Locked by sender
                return false;
            }

            let res = self.lock.compare_exchange(curr, curr + 2, SeqCst, SeqCst);

            let curr = match res {
                Ok(_) => return true,
                Err(actual) => actual,
            };
        }
    }

    fn rx_unlock(&self, condvar: &Condvar) {
        let prev = self.lock.fetch_sub(2, SeqCst);

        if prev & 1 == 1 {
            // Sender waiting for lock
            condvar.notify_one();
        }
    }
}

impl<'a, T> RecvGuard<'a, T> {
    fn pos(&self) -> u64 {
        self.slot.write.with(|ptr| unsafe { (*ptr).pos })
    }

    fn clone_value(&self) -> Option<T>
    where
        T: Clone,
    {
        self.slot.write.with(|ptr| unsafe { (*ptr).val.clone() })
    }

    fn drop_no_rem_dec(self) {
        use std::mem;

        self.slot.rx_unlock(self.condvar);

        mem::forget(self);
    }
}

impl<'a, T> Drop for RecvGuard<'a, T> {
    fn drop(&mut self) {
        // Decrement the remaining counter
        if 1 == self.slot.rem.fetch_sub(1, SeqCst) {
            // Last receiver, drop the value
            self.slot.write.with_mut(|ptr| unsafe { (*ptr).val = None });
        }

        self.slot.rx_unlock(self.condvar)
    }
}

fn ok_empty<T>(res: Result<T, TryRecvError>) -> Result<Option<T>, RecvError> {
    match res {
        Ok(value) => Ok(Some(value)),
        Err(TryRecvError::Empty) => Ok(None),
        Err(TryRecvError::Lagged) => Err(RecvError::Lagged),
        Err(TryRecvError::Closed) => Err(RecvError::Closed),
    }
}
