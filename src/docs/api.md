
# [Bluetooth](./bluetooth.js#L7)

A high level, cross-platform API for Bluetooth Pub-Sub



## [`Bluetooth` (extends `EventEmitter`)](./bluetooth.js#L13)

Create an instance of a Bluetooth service.



### [`constructor()`](./bluetooth.js#L21)

constructor is an example property that is set to `true`
Creates a new service with key-value pairs

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| serviceId | string |  | false | Given a default value to determine the type |



### [`subscribe()`](./bluetooth.js#L63)

Start scanning for published values that correspond to a well-known UUID

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| id | string |  | false | A well-known UUID |



### [`publish()`](./bluetooth.js#L75)

Start advertising a new value for a well-known UUID

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| id | string |  | false | A well-known UUID |



# [Dgram](./dgram.js#L8)

This module provides an implementation of UDP datagram sockets. It does
not (yet) provide any of the multicast methods or properties.



## [`Socket` (extends `EventEmitter`)](./dgram.js#L38)

New instances of dgram.Socket are created using dgram.createSocket().
The new keyword is not to be used to create dgram.Socket instances.



### [`bind()`](./dgram.js#L86)

Listen for datagram messages on a named port and optional address
If address is not specified, the operating system will attempt to
listen on all addresses. Once binding is complete, a 'listening'
event is emitted and the optional callback function is called.
If binding fails, an 'error' event is emitted.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| port | number |  | false | The port to to listen for messages on |
| address | string |  | false | The address to bind to (0.0.0.0) |
| callback | function |  | false | With no parameters. Called when binding is complete. |



### [`connect()`](./dgram.js#L200)

Associates the dgram.Socket to a remote address and port. Every message sent
by this handle is automatically sent to that destination. Also, the socket
will only receive messages from that remote peer. Trying to call connect()
on an already connected socket will result in an ERR_SOCKET_DGRAM_IS_CONNECTED
exception. If address is not provided, '127.0.0.1' (for udp4 sockets) or '::1'
(for udp6 sockets) will be used by default. Once the connection is complete,
a 'connect' event is emitted and the optional callback function is called.
In case of failure, the callback is called or, failing this, an 'error' event
is emitted.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| port | number |  | false | Port the client should connect to. |
| host | string |  | true | Host the client should connect to. |
| connectListener | function |  | true | Common parameter of socket.connect() methods. Will be added as a listener for the 'connect' event once. |



### [`send()`](./dgram.js#L333)

Broadcasts a datagram on the socket. For connectionless sockets, the
destination port and address must be specified. Connected sockets, on the
other hand, will use their associated remote endpoint, so the port and
address arguments must not be set.
The msg argument contains the message to be sent. Depending on its type,
different behavior can apply. If msg is a Buffer, any TypedArray or a
DataView, the offset and length specify the offset within the Buffer where
the message begins and the number of bytes in the message, respectively.
If msg is a String, then it is automatically converted to a Buffer with
'utf8' encoding. With messages that contain multi-byte characters, offset
and length will be calculated with respect to byte length and not the
character position. If msg is an array, offset and length must not be
specified.
The address argument is a string. If the value of address is a host name,
DNS will be used to resolve the address of the host. If address is not
provided or otherwise nullish, '127.0.0.1' (for udp4 sockets) or '::1'
(for udp6 sockets) will be used by default.
If the socket has not been previously bound with a call to bind, the socket
is assigned a random port number and is bound to the "all interfaces"
address ('0.0.0.0' for udp4 sockets, '::0' for udp6 sockets.)
An optional callback function may be specified to as a way of reporting DNS
errors or for determining when it is safe to reuse the buf object. DNS
lookups delay the time to send for at least one tick of the Node.js event
loop.
The only way to know for sure that the datagram has been sent is by using a
callback. If an error occurs and a callback is given, the error will be
passed as the first argument to the callback. If a callback is not given,
the error is emitted as an 'error' event on the socket object.
Offset and length are optional but both must be set if either are used.
They are supported only when the first argument is a Buffer, a TypedArray,
or a DataView.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| buffer | ArrayBuffer |  | false | An array buffer of data to send |



### [undefined](./dgram.js#L384)

const { err: errBind } = this.bind({ port: 0 }, null)
    if (errBind) {
      if (cb) return cb(errBind)
      return { err: errBind }
    }



### [`close()`](./dgram.js#L416)

Close the underlying socket and stop listening for data on it. If a
callback is provided, it is added as a listener for the 'close' event.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| callback | function |  | false | Called when the connection is completed or on error. |



### [`address()`](./dgram.js#L444)

Returns an object containing the address information for a socket. For
UDP sockets, this object will contain address, family, and port properties.
This method throws EBADF if called on an unbound socket.


| Return Value | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| socketInfo | Object |  | false | Information about the local socket |
| socketInfo.address | string |  | false | The IP address of the socket |
| socketInfo.ip | ip |  | false | The IP address of the socket |
| socketInfo.port | string |  | false | The port of the socket |
| socketInfo.family | string |  | false | The IP family of the socket |


### [`remoteAddress()`](./dgram.js#L464)

Returns an object containing the address, family, and port of the remote
endpoint. This method throws an ERR_SOCKET_DGRAM_NOT_CONNECTED exception
if the socket is not connected.


| Return Value | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| socketInfo | Object |  | false | Information about the remote socket |
| socketInfo.remoteAddress | string |  | false | The IP address of the socket |
| socketInfo.remoteIp | ip |  | false | The IP address of the socket |
| socketInfo.remotePort | string |  | false | The port of the socket |
| socketInfo.remoteFamily | string |  | false | The IP family of the socket |


## [createSocket](./dgram.js#L553)

This is a `VariableDeclaration` named `createSocket`in `dgram.js`, it's exported but undocumented.



## [`lookup()`](./dns.js#L18)

This module enables name resolution. For example, use it to look up IP
addresses of host names. Although named for the Domain Name System (DNS),
it does not always use the DNS protocol for lookups. dns.lookup() uses the
operating system facilities to perform name resolution. It may not need to
perform any network communication. To perform name resolution the way other
applications on the same system do, use dns.lookup().



# [IPC](./ipc.js#L35)

There are three important concepts for an application built with the Socket
SDK. The `Render` process, the `Main` process, and the `Bridge` process.
`IPC` is an acronym for Inter Process Communication. It's the method for
which these [processes][processes] work together.
The Bridge process handles communication between the Render and Main
processes. For Desktop apps, the Render process is the user interface, and
the Main process, which is optional, is strictly for computing and IO.
When an applicaiton starts, the Bridge process will spawn a child process
if one is specified.
The Binding process uses standard input and output as a way to communicate.
Data written to the write-end of the pipe is buffered by the OS until it is
read from the read-end of the pipe.
The IPC protocol uses a simple URI-like scheme.
```uri
ipc://command?key1=value1&key2=value2...
```
The query is encoded with `encodeURIComponent`.
Here is a reference [implementation][0] if you would like to use a language
that does not yet have one.



## [OK](./ipc.js#L127)

Represents an OK IPC status.



## [ERROR](./ipc.js#L132)

Represents an ERROR IPC status.



## [TIMEOUT](./ipc.js#L137)

Timeout in milliseconds for IPC requests.



## [kDebugEnabled](./ipc.js#L142)

Symbol for the `ipc.debug.enabled` property



## [`parseSeq()`](./ipc.js#L150)

Parses `seq` as integer value

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| seq | string\|number |  | false |  |
| [options] | (object) |  | true |  |
| [options.bigint = false] | boolean |  | false |  |



## [`debug()`](./ipc.js#L160)

If `debug.enabled === true`, then debug output will be printed to console.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| [enable] | (boolean) |  | false |  |



## [`Message` (extends `URL`)](./ipc.js#L190)

A container for a IPC message based on a `ipc://` URI scheme.



### [PROTOCOL](./ipc.js#L195)

The expected protocol for an IPC message.



### [`from()`](./ipc.js#L205)

Creates a `Message` instance from a variety of input.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| input | string\|URL|Message|Buffer|object |  | false |  |
| [params] | (object\|string|URLSearchParams) |  | true |  |



### [`isValidInput()`](./ipc.js#L250)

Predicate to determine if `input` is valid for constructing
a new `Message` instance.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| input | string\|URL|Message|Buffer|object |  | false |  |



### [`constructor()`](./ipc.js#L265)

`Message` class constructor.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| input | string\|URL |  | false |  |



### [command](./ipc.js#L278)

Computed command for the IPC message.



### [id](./ipc.js#L285)

Computed `id` value for the command.



### [seq](./ipc.js#L292)

Computed `seq` (sequence) value for the command.



### [value](./ipc.js#L300)

Computed message value potentially given in message parameters.
This value is automatically decoded, but not treated as JSON.



### [index](./ipc.js#L309)

Computed `index` value for the command potentially referring to
the window index the command is scoped to or originating from. If not
specified in the message parameters, then this value defaults to `-1`.



### [json](./ipc.js#L326)

Computed value parsed as JSON. This value is `null` if the value is not present
or it is invalid JSON.



### [params](./ipc.js#L338)

Computed readonly object of message parameters.



### [entries](./ipc.js#L346)

Returns computed parameters as entries



### [`set()`](./ipc.js#L362)

Set a parameter `value` by `key`.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| key | string |  | false |  |
| value | mixed |  | false |  |



### [`get()`](./ipc.js#L376)

Get a parameter value by `key`.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| key | string |  | false |  |
| defaultValue | mixed |  | false |  |



### [`delete()`](./ipc.js#L396)

Delete a parameter by `key`.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| key | string |  | false |  |



### [keys](./ipc.js#L408)

Computed parameter keys.



### [values](./ipc.js#L416)

Computed parameter values.



### [`has()`](./ipc.js#L432)

Predicate to determine if parameter `key` is present in parameters.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| key | string |  | false |  |



### [toJSON](./ipc.js#L439)

Converts a `Message` instance into a plain JSON object.



## [Result](./ipc.js#L451)

A result type used internally for handling
IPC result values from the native layer that are in the form
of `{ err?, data? }`. The `data` and `err` properties on this
type of object are in tuple form and be accessed at `[data?,err?]`



### [`from()`](./ipc.js#L459)

Creates a `Result` instance from input that may be an object
like `{ err?, data? }`, an `Error` instance, or just `data`.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| result | (object\|Error|mixed) |  | true |  |



### [`constructor()`](./ipc.js#L482)

`Result` class constructor.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| data | (object) |  | true |  |
| err | (Error) |  | true |  |



## [ready](./ipc.js#L519)

This is a `FunctionDeclaration` named `ready`in `ipc.js`, it's exported but undocumented.



## [`sendSync()`](./ipc.js#L544)

Sends a synchronous IPC command over XHR returning a `Result`
upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| command | string |  | false |  |
| params | (object\|string) |  | true |  |



## [emit](./ipc.js#L584)

This is a `FunctionDeclaration` named `emit`in `ipc.js`, it's exported but undocumented.



## [resolve](./ipc.js#L594)

This is a `FunctionDeclaration` named `resolve`in `ipc.js`, it's exported but undocumented.



## [send](./ipc.js#L604)

This is a `FunctionDeclaration` named `send`in `ipc.js`, it's exported but undocumented.



## [write](./ipc.js#L621)

This is a `FunctionDeclaration` named `write`in `ipc.js`, it's exported but undocumented.



## [request](./ipc.js#L715)

This is a `FunctionDeclaration` named `request`in `ipc.js`, it's exported but undocumented.



## [`createBinding()`](./ipc.js#L818)

Factory for creating a proxy based IPC API.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| domain | string |  | false |  |
| ctx | (function\|object) |  | true |  |
| [ctx.default] | (string) |  | true |  |



# [OS](./os.js#L8)

This module provides normalized system information from all the major
operating systems.



## [arch](./os.js#L19)

This is a `FunctionDeclaration` named `arch`in `os.js`, it's exported but undocumented.



## [networkInterfaces](./os.js#L52)

This is a `FunctionDeclaration` named `networkInterfaces`in `os.js`, it's exported but undocumented.



## [platform](./os.js#L119)

This is a `FunctionDeclaration` named `platform`in `os.js`, it's exported but undocumented.



## [type](./os.js#L146)

This is a `FunctionDeclaration` named `type`in `os.js`, it's exported but undocumented.



## [EOL](./os.js#L178)

This is a `VariableDeclaration` named `EOL`in `os.js`, it's exported but undocumented.



# [Net](./net.js#L10)

This module provides an asynchronous network API for creating
stream-based TCP or IPC servers (net.createServer()) and clients
(net.createConnection()).



## [`Server` (extends `EventEmitter`)](./net.js#L67)

This is a `ClassDeclaration` named ``Server` (extends `EventEmitter`)`in `net.js`, it's exported but undocumented.



## [`Socket` (extends `Duplex`)](./net.js#L152)

This is a `ClassDeclaration` named ``Socket` (extends `Duplex`)`in `net.js`, it's exported but undocumented.



## [connect](./net.js#L411)

This is a `VariableDeclaration` named `connect`in `net.js`, it's exported but undocumented.



## [createServer](./net.js#L422)

This is a `VariableDeclaration` named `createServer`in `net.js`, it's exported but undocumented.



## [getNetworkInterfaces](./net.js#L426)

This is a `VariableDeclaration` named `getNetworkInterfaces`in `net.js`, it's exported but undocumented.



## [isIPv4](./net.js#L432)

This is a `VariableDeclaration` named `isIPv4`in `net.js`, it's exported but undocumented.



# [File System](./fs/index.js#L20)

This module enables interacting with the file system in a way modeled on
standard POSIX functions.
To use the promise-based APIs:
```js
import
```
To use the callback and async APIs:
```js
import
```



## [`access()`](./fs/index.js#L73)

Asynchronously check access a file for a given mode calling `callback`
upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL |  | false |  |
| [mode = F_OK(0)] | (string) |  | true |  |
| callback | function(err, fd) |  | false |  |



## [appendFile](./fs/index.js#L89)

This is a `FunctionDeclaration` named `appendFile`in `fs/index.js`, it's exported but undocumented.



## [chmod](./fs/index.js#L92)

This is a `FunctionDeclaration` named `chmod`in `fs/index.js`, it's exported but undocumented.



## [chown](./fs/index.js#L110)

This is a `FunctionDeclaration` named `chown`in `fs/index.js`, it's exported but undocumented.



## [`close()`](./fs/index.js#L119)

Asynchronously close a file descriptor calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| callback | function(err) |  | false |  |



## [copyFile](./fs/index.js#L135)

This is a `FunctionDeclaration` named `copyFile`in `fs/index.js`, it's exported but undocumented.



## [createReadStream](./fs/index.js#L138)

This is a `FunctionDeclaration` named `createReadStream`in `fs/index.js`, it's exported but undocumented.



## [createWriteStream](./fs/index.js#L172)

This is a `FunctionDeclaration` named `createWriteStream`in `fs/index.js`, it's exported but undocumented.



## [`fstat()`](./fs/index.js#L214)

Invokes the callback with the <fs.Stats> for the file descriptor. See
the POSIX fstat(2) documentation for more detail.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| fd | number |  | false | A file descriptor. |
| options | Object |  | false | An options object. |
| callback | function |  | false | The function to call after completion. |



## [lchmod](./fs/index.js#L235)

This is a `FunctionDeclaration` named `lchmod`in `fs/index.js`, it's exported but undocumented.



## [lchown](./fs/index.js#L238)

This is a `FunctionDeclaration` named `lchown`in `fs/index.js`, it's exported but undocumented.



## [lutimes](./fs/index.js#L241)

This is a `FunctionDeclaration` named `lutimes`in `fs/index.js`, it's exported but undocumented.



## [link](./fs/index.js#L244)

This is a `FunctionDeclaration` named `link`in `fs/index.js`, it's exported but undocumented.



## [lstat](./fs/index.js#L247)

This is a `FunctionDeclaration` named `lstat`in `fs/index.js`, it's exported but undocumented.



## [mkdir](./fs/index.js#L250)

This is a `FunctionDeclaration` named `mkdir`in `fs/index.js`, it's exported but undocumented.



## [`open()`](./fs/index.js#L261)

Asynchronously open a file calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL |  | false |  |
| [flags = 'r'] | (string) |  | true |  |
| [mode = 0o666] | (string) |  | true |  |
| callback | function(err, fd) |  | false |  |



## [`opendir()`](./fs/index.js#L311)

Asynchronously open a directory calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL |  | false |  |
| callback | function(err, fd) |  | false |  |



## [`read()`](./fs/index.js#L333)

Asynchronously read from an open file descriptor.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| buffer | object \| Buffer | TypedArray |  | false |  |



## [`readdir()`](./fs/index.js#L365)

Asynchronously read all entries in a directory.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL  |  | false |  |
| [options] | object |  | false |  |
| callback | function(err, buffer) |  | false |  |



## [`readFile()`](./fs/index.js#L413)



| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL | number  |  | false |  |
| [options] | object |  | false |  |
| callback | function(err, buffer) |  | false |  |



## [readlink](./fs/index.js#L451)

This is a `FunctionDeclaration` named `readlink`in `fs/index.js`, it's exported but undocumented.



## [realpath](./fs/index.js#L454)

This is a `FunctionDeclaration` named `realpath`in `fs/index.js`, it's exported but undocumented.



## [rename](./fs/index.js#L457)

This is a `FunctionDeclaration` named `rename`in `fs/index.js`, it's exported but undocumented.



## [rmdir](./fs/index.js#L460)

This is a `FunctionDeclaration` named `rmdir`in `fs/index.js`, it's exported but undocumented.



## [rm](./fs/index.js#L463)

This is a `FunctionDeclaration` named `rm`in `fs/index.js`, it's exported but undocumented.



## [stat](./fs/index.js#L466)

This is a `FunctionDeclaration` named `stat`in `fs/index.js`, it's exported but undocumented.



## [symlink](./fs/index.js#L495)

This is a `FunctionDeclaration` named `symlink`in `fs/index.js`, it's exported but undocumented.



## [truncate](./fs/index.js#L498)

This is a `FunctionDeclaration` named `truncate`in `fs/index.js`, it's exported but undocumented.



## [unlink](./fs/index.js#L501)

This is a `FunctionDeclaration` named `unlink`in `fs/index.js`, it's exported but undocumented.



## [utimes](./fs/index.js#L504)

This is a `FunctionDeclaration` named `utimes`in `fs/index.js`, it's exported but undocumented.



## [watch](./fs/index.js#L507)

This is a `FunctionDeclaration` named `watch`in `fs/index.js`, it's exported but undocumented.



## [write](./fs/index.js#L510)

This is a `FunctionDeclaration` named `write`in `fs/index.js`, it's exported but undocumented.



## [writeFile](./fs/index.js#L513)

This is a `FunctionDeclaration` named `writeFile`in `fs/index.js`, it's exported but undocumented.



## [writev](./fs/index.js#L550)

This is a `FunctionDeclaration` named `writev`in `fs/index.js`, it's exported but undocumented.


