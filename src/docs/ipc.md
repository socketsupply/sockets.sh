# IPC

There are three important concepts for an application built with the Socket
SDK. The `Render` process, the `Main` process, and the `Bridge` process.

`IPC` is an acronym for [Inter Process Communication][ipc]. It's the method for
which these [processes][processes] work together.

The Bridge process handles communication between the Render and Main
processes. For Desktop apps, the Render process is the user interface, and the
Main process is strictly for computing and IO.

When an applicaiton starts, the Bridge process will spawn a child process, which
we will call the Main process.

The Binding process creates a unidirectional data channel using standard input
and output. Data written to the write-end of the pipe is buffered by the OS
until it is read from the read-end of the pipe.

The IPC protocol uses a simple URI-like scheme.

```uri
ipc://command?key1=value1&key2=value2...
```

The query is encoded with `encodeURIComponent`.

Here is a reference [implementation][0] if you would like to use a language
that does not yet have one.

[processes]:https://en.wikipedia.org/wiki/Process_(computing)
[ipc]:https://en.wikipedia.org/wiki/Inter-process_communication
[0]: https://github.com/socketsupply/socket-sdk/blob/master/test/example/src/main/ipc.js
