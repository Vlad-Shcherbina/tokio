(function() {var implementors = {};
implementors["tokio"] = [{text:"impl Freeze for <a class=\"struct\" href=\"tokio/fs/struct.File.html\" title=\"struct tokio::fs::File\">File</a>",synthetic:true,types:["tokio::fs::file::File"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/fs/struct.OpenOptions.html\" title=\"struct tokio::fs::OpenOptions\">OpenOptions</a>",synthetic:true,types:["tokio::fs::open_options::OpenOptions"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/fs/struct.DirEntry.html\" title=\"struct tokio::fs::DirEntry\">DirEntry</a>",synthetic:true,types:["tokio::fs::read_dir::DirEntry"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/fs/struct.ReadDir.html\" title=\"struct tokio::fs::ReadDir\">ReadDir</a>",synthetic:true,types:["tokio::fs::read_dir::ReadDir"]},{text:"impl&lt;E&gt; !Freeze for <a class=\"struct\" href=\"tokio/io/struct.PollEvented.html\" title=\"struct tokio::io::PollEvented\">PollEvented</a>&lt;E&gt;",synthetic:true,types:["tokio::io::poll_evented::PollEvented"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/io/struct.Registration.html\" title=\"struct tokio::io::Registration\">Registration</a>",synthetic:true,types:["tokio::io::registration::Registration"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/io/struct.Stderr.html\" title=\"struct tokio::io::Stderr\">Stderr</a>",synthetic:true,types:["tokio::io::stderr::Stderr"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/io/struct.Stdin.html\" title=\"struct tokio::io::Stdin\">Stdin</a>",synthetic:true,types:["tokio::io::stdin::Stdin"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/io/struct.Stdout.html\" title=\"struct tokio::io::Stdout\">Stdout</a>",synthetic:true,types:["tokio::io::stdout::Stdout"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/io/struct.ReadHalf.html\" title=\"struct tokio::io::ReadHalf\">ReadHalf</a>&lt;T&gt;",synthetic:true,types:["tokio::io::split::ReadHalf"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/io/struct.WriteHalf.html\" title=\"struct tokio::io::WriteHalf\">WriteHalf</a>&lt;T&gt;",synthetic:true,types:["tokio::io::split::WriteHalf"]},{text:"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"tokio/io/struct.BufReader.html\" title=\"struct tokio::io::BufReader\">BufReader</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::io::util::buf_reader::BufReader"]},{text:"impl&lt;RW&gt; Freeze for <a class=\"struct\" href=\"tokio/io/struct.BufStream.html\" title=\"struct tokio::io::BufStream\">BufStream</a>&lt;RW&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RW: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::io::util::buf_stream::BufStream"]},{text:"impl&lt;W&gt; Freeze for <a class=\"struct\" href=\"tokio/io/struct.BufWriter.html\" title=\"struct tokio::io::BufWriter\">BufWriter</a>&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::io::util::buf_writer::BufWriter"]},{text:"impl&lt;'a, R:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, W:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"tokio/io/struct.Copy.html\" title=\"struct tokio::io::Copy\">Copy</a>&lt;'a, R, W&gt;",synthetic:true,types:["tokio::io::util::copy::Copy"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/io/struct.Empty.html\" title=\"struct tokio::io::Empty\">Empty</a>",synthetic:true,types:["tokio::io::util::empty::Empty"]},{text:"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"tokio/io/struct.Lines.html\" title=\"struct tokio::io::Lines\">Lines</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::io::util::lines::Lines"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/io/struct.Repeat.html\" title=\"struct tokio::io::Repeat\">Repeat</a>",synthetic:true,types:["tokio::io::util::repeat::Repeat"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/io/struct.Sink.html\" title=\"struct tokio::io::Sink\">Sink</a>",synthetic:true,types:["tokio::io::util::sink::Sink"]},{text:"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"tokio/io/struct.Split.html\" title=\"struct tokio::io::Split\">Split</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::io::util::split::Split"]},{text:"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"tokio/io/struct.Take.html\" title=\"struct tokio::io::Take\">Take</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::io::util::take::Take"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/net/struct.TcpListener.html\" title=\"struct tokio::net::TcpListener\">TcpListener</a>",synthetic:true,types:["tokio::net::tcp::listener::TcpListener"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>",synthetic:true,types:["tokio::net::tcp::stream::TcpStream"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/net/struct.UdpSocket.html\" title=\"struct tokio::net::UdpSocket\">UdpSocket</a>",synthetic:true,types:["tokio::net::udp::socket::UdpSocket"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/net/struct.UnixDatagram.html\" title=\"struct tokio::net::UnixDatagram\">UnixDatagram</a>",synthetic:true,types:["tokio::net::unix::datagram::UnixDatagram"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/net/struct.UnixListener.html\" title=\"struct tokio::net::UnixListener\">UnixListener</a>",synthetic:true,types:["tokio::net::unix::listener::UnixListener"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>",synthetic:true,types:["tokio::net::unix::stream::UnixStream"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"tokio/net/tcp/struct.Incoming.html\" title=\"struct tokio::net::tcp::Incoming\">Incoming</a>&lt;'a&gt;",synthetic:true,types:["tokio::net::tcp::incoming::Incoming"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"tokio/net/tcp/struct.ReadHalf.html\" title=\"struct tokio::net::tcp::ReadHalf\">ReadHalf</a>&lt;'a&gt;",synthetic:true,types:["tokio::net::tcp::split::ReadHalf"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"tokio/net/tcp/struct.WriteHalf.html\" title=\"struct tokio::net::tcp::WriteHalf\">WriteHalf</a>&lt;'a&gt;",synthetic:true,types:["tokio::net::tcp::split::WriteHalf"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/net/udp/struct.RecvHalf.html\" title=\"struct tokio::net::udp::RecvHalf\">RecvHalf</a>",synthetic:true,types:["tokio::net::udp::split::RecvHalf"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/net/udp/struct.SendHalf.html\" title=\"struct tokio::net::udp::SendHalf\">SendHalf</a>",synthetic:true,types:["tokio::net::udp::split::SendHalf"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/net/udp/struct.ReuniteError.html\" title=\"struct tokio::net::udp::ReuniteError\">ReuniteError</a>",synthetic:true,types:["tokio::net::udp::split::ReuniteError"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"tokio/net/unix/struct.Incoming.html\" title=\"struct tokio::net::unix::Incoming\">Incoming</a>&lt;'a&gt;",synthetic:true,types:["tokio::net::unix::incoming::Incoming"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"tokio/net/unix/struct.ReadHalf.html\" title=\"struct tokio::net::unix::ReadHalf\">ReadHalf</a>&lt;'a&gt;",synthetic:true,types:["tokio::net::unix::split::ReadHalf"]},{text:"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"tokio/net/unix/struct.WriteHalf.html\" title=\"struct tokio::net::unix::WriteHalf\">WriteHalf</a>&lt;'a&gt;",synthetic:true,types:["tokio::net::unix::split::WriteHalf"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/net/unix/struct.UCred.html\" title=\"struct tokio::net::unix::UCred\">UCred</a>",synthetic:true,types:["tokio::net::unix::ucred::UCred"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/process/struct.Command.html\" title=\"struct tokio::process::Command\">Command</a>",synthetic:true,types:["tokio::process::Command"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/process/struct.Child.html\" title=\"struct tokio::process::Child\">Child</a>",synthetic:true,types:["tokio::process::Child"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/process/struct.ChildStdin.html\" title=\"struct tokio::process::ChildStdin\">ChildStdin</a>",synthetic:true,types:["tokio::process::ChildStdin"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/process/struct.ChildStdout.html\" title=\"struct tokio::process::ChildStdout\">ChildStdout</a>",synthetic:true,types:["tokio::process::ChildStdout"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/process/struct.ChildStderr.html\" title=\"struct tokio::process::ChildStderr\">ChildStderr</a>",synthetic:true,types:["tokio::process::ChildStderr"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/runtime/struct.Builder.html\" title=\"struct tokio::runtime::Builder\">Builder</a>",synthetic:true,types:["tokio::runtime::builder::Builder"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/runtime/struct.Handle.html\" title=\"struct tokio::runtime::Handle\">Handle</a>",synthetic:true,types:["tokio::runtime::handle::Handle"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/runtime/struct.Runtime.html\" title=\"struct tokio::runtime::Runtime\">Runtime</a>",synthetic:true,types:["tokio::runtime::Runtime"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/signal/unix/struct.SignalKind.html\" title=\"struct tokio::signal::unix::SignalKind\">SignalKind</a>",synthetic:true,types:["tokio::signal::unix::SignalKind"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/signal/unix/struct.Signal.html\" title=\"struct tokio::signal::unix::Signal\">Signal</a>",synthetic:true,types:["tokio::signal::unix::Signal"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/sync/struct.Barrier.html\" title=\"struct tokio::sync::Barrier\">Barrier</a>",synthetic:true,types:["tokio::sync::barrier::Barrier"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/sync/struct.BarrierWaitResult.html\" title=\"struct tokio::sync::BarrierWaitResult\">BarrierWaitResult</a>",synthetic:true,types:["tokio::sync::barrier::BarrierWaitResult"]},{text:"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"tokio/sync/struct.Mutex.html\" title=\"struct tokio::sync::Mutex\">Mutex</a>&lt;T&gt;",synthetic:true,types:["tokio::sync::mutex::Mutex"]},{text:"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/struct.MutexGuard.html\" title=\"struct tokio::sync::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;",synthetic:true,types:["tokio::sync::mutex::MutexGuard"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/mpsc/struct.Receiver.html\" title=\"struct tokio::sync::mpsc::Receiver\">Receiver</a>&lt;T&gt;",synthetic:true,types:["tokio::sync::mpsc::bounded::Receiver"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/mpsc/struct.Sender.html\" title=\"struct tokio::sync::mpsc::Sender\">Sender</a>&lt;T&gt;",synthetic:true,types:["tokio::sync::mpsc::bounded::Sender"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/mpsc/struct.UnboundedReceiver.html\" title=\"struct tokio::sync::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;",synthetic:true,types:["tokio::sync::mpsc::unbounded::UnboundedReceiver"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/mpsc/struct.UnboundedSender.html\" title=\"struct tokio::sync::mpsc::UnboundedSender\">UnboundedSender</a>&lt;T&gt;",synthetic:true,types:["tokio::sync::mpsc::unbounded::UnboundedSender"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/mpsc/error/struct.SendError.html\" title=\"struct tokio::sync::mpsc::error::SendError\">SendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::sync::mpsc::error::SendError"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/sync/mpsc/error/struct.RecvError.html\" title=\"struct tokio::sync::mpsc::error::RecvError\">RecvError</a>",synthetic:true,types:["tokio::sync::mpsc::error::RecvError"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/sync/mpsc/error/struct.ClosedError.html\" title=\"struct tokio::sync::mpsc::error::ClosedError\">ClosedError</a>",synthetic:true,types:["tokio::sync::mpsc::error::ClosedError"]},{text:"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TrySendError.html\" title=\"enum tokio::sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::sync::mpsc::error::TrySendError"]},{text:"impl Freeze for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TryRecvError.html\" title=\"enum tokio::sync::mpsc::error::TryRecvError\">TryRecvError</a>",synthetic:true,types:["tokio::sync::mpsc::error::TryRecvError"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/oneshot/struct.Sender.html\" title=\"struct tokio::sync::oneshot::Sender\">Sender</a>&lt;T&gt;",synthetic:true,types:["tokio::sync::oneshot::Sender"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/oneshot/struct.Receiver.html\" title=\"struct tokio::sync::oneshot::Receiver\">Receiver</a>&lt;T&gt;",synthetic:true,types:["tokio::sync::oneshot::Receiver"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/sync/oneshot/error/struct.RecvError.html\" title=\"struct tokio::sync::oneshot::error::RecvError\">RecvError</a>",synthetic:true,types:["tokio::sync::oneshot::error::RecvError"]},{text:"impl Freeze for <a class=\"enum\" href=\"tokio/sync/oneshot/error/enum.TryRecvError.html\" title=\"enum tokio::sync::oneshot::error::TryRecvError\">TryRecvError</a>",synthetic:true,types:["tokio::sync::oneshot::error::TryRecvError"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/watch/struct.Receiver.html\" title=\"struct tokio::sync::watch::Receiver\">Receiver</a>&lt;T&gt;",synthetic:true,types:["tokio::sync::watch::Receiver"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/watch/struct.Sender.html\" title=\"struct tokio::sync::watch::Sender\">Sender</a>&lt;T&gt;",synthetic:true,types:["tokio::sync::watch::Sender"]},{text:"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/watch/struct.Ref.html\" title=\"struct tokio::sync::watch::Ref\">Ref</a>&lt;'a, T&gt;",synthetic:true,types:["tokio::sync::watch::Ref"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/sync/watch/error/struct.SendError.html\" title=\"struct tokio::sync::watch::error::SendError\">SendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::sync::watch::error::SendError"]},{text:"impl !Freeze for <a class=\"struct\" href=\"tokio/task/struct.JoinError.html\" title=\"struct tokio::task::JoinError\">JoinError</a>",synthetic:true,types:["tokio::task::error::JoinError"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/task/struct.JoinHandle.html\" title=\"struct tokio::task::JoinHandle\">JoinHandle</a>&lt;T&gt;",synthetic:true,types:["tokio::task::join::JoinHandle"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/task/struct.LocalSet.html\" title=\"struct tokio::task::LocalSet\">LocalSet</a>",synthetic:true,types:["tokio::task::local::LocalSet"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/time/delay_queue/struct.DelayQueue.html\" title=\"struct tokio::time::delay_queue::DelayQueue\">DelayQueue</a>&lt;T&gt;",synthetic:true,types:["tokio::time::delay_queue::DelayQueue"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/time/struct.Delay.html\" title=\"struct tokio::time::Delay\">Delay</a>",synthetic:true,types:["tokio::time::delay::Delay"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/time/struct.Error.html\" title=\"struct tokio::time::Error\">Error</a>",synthetic:true,types:["tokio::time::error::Error"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/time/struct.Instant.html\" title=\"struct tokio::time::Instant\">Instant</a>",synthetic:true,types:["tokio::time::instant::Instant"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/time/struct.Interval.html\" title=\"struct tokio::time::Interval\">Interval</a>",synthetic:true,types:["tokio::time::interval::Interval"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/time/struct.Timeout.html\" title=\"struct tokio::time::Timeout\">Timeout</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::time::timeout::Timeout"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/time/struct.Elapsed.html\" title=\"struct tokio::time::Elapsed\">Elapsed</a>",synthetic:true,types:["tokio::time::timeout::Elapsed"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio/time/delay_queue/struct.Expired.html\" title=\"struct tokio::time::delay_queue::Expired\">Expired</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>",synthetic:true,types:["tokio::time::delay_queue::Expired"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio/time/delay_queue/struct.Key.html\" title=\"struct tokio::time::delay_queue::Key\">Key</a>",synthetic:true,types:["tokio::time::delay_queue::Key"]},];
implementors["tokio_test"] = [{text:"impl Freeze for <a class=\"struct\" href=\"tokio_test/io/struct.Mock.html\" title=\"struct tokio_test::io::Mock\">Mock</a>",synthetic:true,types:["tokio_test::io::Mock"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio_test/io/struct.Handle.html\" title=\"struct tokio_test::io::Handle\">Handle</a>",synthetic:true,types:["tokio_test::io::Handle"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio_test/io/struct.Builder.html\" title=\"struct tokio_test::io::Builder\">Builder</a>",synthetic:true,types:["tokio_test::io::Builder"]},{text:"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tokio_test/task/struct.Spawn.html\" title=\"struct tokio_test::task::Spawn\">Spawn</a>&lt;T&gt;",synthetic:true,types:["tokio_test::task::Spawn"]},];
implementors["tokio_tls"] = [{text:"impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"tokio_tls/struct.TlsStream.html\" title=\"struct tokio_tls::TlsStream\">TlsStream</a>&lt;S&gt;",synthetic:true,types:["tokio_tls::TlsStream"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio_tls/struct.TlsConnector.html\" title=\"struct tokio_tls::TlsConnector\">TlsConnector</a>",synthetic:true,types:["tokio_tls::TlsConnector"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio_tls/struct.TlsAcceptor.html\" title=\"struct tokio_tls::TlsAcceptor\">TlsAcceptor</a>",synthetic:true,types:["tokio_tls::TlsAcceptor"]},];
implementors["tokio_util"] = [{text:"impl Freeze for <a class=\"struct\" href=\"tokio_util/codec/struct.BytesCodec.html\" title=\"struct tokio_util::codec::BytesCodec\">BytesCodec</a>",synthetic:true,types:["tokio_util::codec::bytes_codec::BytesCodec"]},{text:"impl&lt;T, U&gt; Freeze for <a class=\"struct\" href=\"tokio_util/codec/struct.Framed.html\" title=\"struct tokio_util::codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>",synthetic:true,types:["tokio_util::codec::framed::Framed"]},{text:"impl&lt;T, U&gt; Freeze for <a class=\"struct\" href=\"tokio_util/codec/struct.FramedParts.html\" title=\"struct tokio_util::codec::FramedParts\">FramedParts</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>",synthetic:true,types:["tokio_util::codec::framed::FramedParts"]},{text:"impl&lt;T, D&gt; Freeze for <a class=\"struct\" href=\"tokio_util/codec/struct.FramedRead.html\" title=\"struct tokio_util::codec::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>",synthetic:true,types:["tokio_util::codec::framed_read::FramedRead"]},{text:"impl&lt;T, E&gt; Freeze for <a class=\"struct\" href=\"tokio_util/codec/struct.FramedWrite.html\" title=\"struct tokio_util::codec::FramedWrite\">FramedWrite</a>&lt;T, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>",synthetic:true,types:["tokio_util::codec::framed_write::FramedWrite"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio_util/codec/struct.LinesCodec.html\" title=\"struct tokio_util::codec::LinesCodec\">LinesCodec</a>",synthetic:true,types:["tokio_util::codec::lines_codec::LinesCodec"]},{text:"impl Freeze for <a class=\"enum\" href=\"tokio_util/codec/enum.LinesCodecError.html\" title=\"enum tokio_util::codec::LinesCodecError\">LinesCodecError</a>",synthetic:true,types:["tokio_util::codec::lines_codec::LinesCodecError"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio_util/codec/length_delimited/struct.Builder.html\" title=\"struct tokio_util::codec::length_delimited::Builder\">Builder</a>",synthetic:true,types:["tokio_util::codec::length_delimited::Builder"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio_util/codec/length_delimited/struct.LengthDelimitedCodecError.html\" title=\"struct tokio_util::codec::length_delimited::LengthDelimitedCodecError\">LengthDelimitedCodecError</a>",synthetic:true,types:["tokio_util::codec::length_delimited::LengthDelimitedCodecError"]},{text:"impl Freeze for <a class=\"struct\" href=\"tokio_util/codec/length_delimited/struct.LengthDelimitedCodec.html\" title=\"struct tokio_util::codec::length_delimited::LengthDelimitedCodec\">LengthDelimitedCodec</a>",synthetic:true,types:["tokio_util::codec::length_delimited::LengthDelimitedCodec"]},{text:"impl&lt;C&gt; !Freeze for <a class=\"struct\" href=\"tokio_util/udp/struct.UdpFramed.html\" title=\"struct tokio_util::udp::UdpFramed\">UdpFramed</a>&lt;C&gt;",synthetic:true,types:["tokio_util::udp::frame::UdpFramed"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()