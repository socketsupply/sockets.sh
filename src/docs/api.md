
# [Bluetooth](https://github.com/socketsupply/io/blob/master/bluetooth.js#L7)


 A high level, cross-platform API for Bluetooth Pub-Sub

## [`Bluetooth` (extends `EventEmitter`)](https://github.com/socketsupply/io/blob/master/bluetooth.js#L13)

Create an instance of a Bluetooth service.

### [`constructor(serviceId)`](https://github.com/socketsupply/io/blob/master/bluetooth.js#L21)

constructor is an example property that is set to `true`
 Creates a new service with key-value pairs

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| serviceId | string |  | false | Given a default value to determine the type |


### [`start()`](https://github.com/socketsupply/io/blob/master/bluetooth.js#L58)

Start the bluetooth service.

| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Promise<Any> |  |


### [`subscribe(id)`](https://github.com/socketsupply/io/blob/master/bluetooth.js#L78)

Start scanning for published values that correspond to a well-known UUID.
 Once subscribed to a UUID, events that correspond to that UUID will be
 emitted. To receive these events you can add an event listener, for example...

 ```js
 const ble = new Bluetooth(id)
 ble.subscribe(uuid)
 ble.on(uuid, (data, details) => {
   // ...do something interesting
 })
 ```


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| id | string |  | false | A well-known UUID |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Promise<any> |  |


### [`publish(id)`](https://github.com/socketsupply/io/blob/master/bluetooth.js#L90)

Start advertising a new value for a well-known UUID

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| id | string |  | false | A well-known UUID |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Promise<any> |  |


# [Buffer](https://github.com/socketsupply/io/blob/master/buffer.js#L7)

External docs: https://nodejs.org/api/buffer.html#buffer_class_buffer


# [Crypto](https://github.com/socketsupply/io/blob/master/crypto.js#L8)


 Some high level methods around the `crypto.subtle` api for getting
 random bytes and hashing.

## [`getRandomValues(buffer)`](https://github.com/socketsupply/io/blob/master/crypto.js#L19)

External docs: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
Generate cryptographically strong random values into `buffer`

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| buffer | TypedArray |  | false |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | TypedArray |  |


## [`randomBytes(size)`](https://github.com/socketsupply/io/blob/master/crypto.js#L26)

Generate `size` random bytes.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| size | number |  | false | The number of bytes to generate. The size must not be larger than 2**31 - 1. |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Buffer | A promise that resolves with an instance of io.Buffer with random bytes. |


## [`createDigest(algorithm, message)`](https://github.com/socketsupply/io/blob/master/crypto.js#L37)



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| algorithm | string |  | false | `SHA-1` | `SHA-256` | `SHA-384` | `SHA-512` |
| message | Buffer \| TypedArray \| DataView |  | false | An instance of io.Buffer, TypedArray or Dataview. |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Promise<Buffer> | A promise that resolves with an instance of io.Buffer with the hash. |


# [Dgram](https://github.com/socketsupply/io/blob/master/dgram.js#L8)


 This module provides an implementation of UDP datagram sockets. It does
 not (yet) provide any of the multicast methods or properties.

## [`SocketError` (extends `InternalError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L23)

This is a `ClassDeclaration` named ``SocketError` (extends `InternalError`)` in `dgram.js`, it's exported but undocumented.


## [`ERR_SOCKET_ALREADY_BOUND` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L27)

This is a `ClassDeclaration` named ``ERR_SOCKET_ALREADY_BOUND` (extends `SocketError`)` in `dgram.js`, it's exported but undocumented.


## [`ERR_SOCKET_BAD_BUFFER_SIZE` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L28)

This is a `ClassDeclaration` named ``ERR_SOCKET_BAD_BUFFER_SIZE` (extends `SocketError`)` in `dgram.js`, it's exported but undocumented.


## [`ERR_SOCKET_BUFFER_SIZE` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L29)

This is a `ClassDeclaration` named ``ERR_SOCKET_BUFFER_SIZE` (extends `SocketError`)` in `dgram.js`, it's exported but undocumented.


## [`ERR_SOCKET_DGRAM_IS_CONNECTED` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L30)

This is a `ClassDeclaration` named ``ERR_SOCKET_DGRAM_IS_CONNECTED` (extends `SocketError`)` in `dgram.js`, it's exported but undocumented.


## [`ERR_SOCKET_DGRAM_NOT_CONNECTED` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L31)

This is a `ClassDeclaration` named ``ERR_SOCKET_DGRAM_NOT_CONNECTED` (extends `SocketError`)` in `dgram.js`, it's exported but undocumented.


## [`ERR_SOCKET_DGRAM_NOT_RUNNING` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L32)

This is a `ClassDeclaration` named ``ERR_SOCKET_DGRAM_NOT_RUNNING` (extends `SocketError`)` in `dgram.js`, it's exported but undocumented.


## [`createSocket(options, callback)`](https://github.com/socketsupply/io/blob/master/dgram.js#L84)



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| options | string \| Object |  | false | either a string ('udp4' or 'udp6') or an options object |
| options.type | string |  | true | The family of socket. Must be either 'udp4' or 'udp6'. Required. |
| options.reuseAddr | boolean | false | true | When true socket.bind() will reuse the address, even if another process has already bound a socket on it. Default: false. |
| options.ipv6Only | boolean | false | true | Setting ipv6Only to true will disable dual-stack support, i.e., binding to address :: won't make 0.0.0.0 be bound. Default: false. |
| options.recvBufferSize | number |  | true | Sets the SO_RCVBUF socket value. |
| options.sendBufferSize | number |  | true | Sets the SO_SNDBUF socket value. |
| options.signal | AbortSignal |  | true | An AbortSignal that may be used to close a socket. |
| callback | function |  | true | Attached as a listener for 'message' events. Optional. |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Socket |  |


## [`Socket` (extends `EventEmitter`)](https://github.com/socketsupply/io/blob/master/dgram.js#L90)

New instances of dgram.Socket are created using dgram.createSocket().
 The new keyword is not to be used to create dgram.Socket instances.

### [`bind(port, address, callback)`](https://github.com/socketsupply/io/blob/master/dgram.js#L152)

Listen for datagram messages on a named port and optional address
 If address is not specified, the operating system will attempt to
 listen on all addresses. Once binding is complete, a 'listening'
 event is emitted and the optional callback function is called.

 If binding fails, an 'error' event is emitted.


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| port | number |  | false | The port to to listen for messages on |
| address | string |  | false | The address to bind to (0.0.0.0) |
| callback | function |  | false | With no parameters. Called when binding is complete. |


### [`connect(port, host, connectListener)`](https://github.com/socketsupply/io/blob/master/dgram.js#L269)

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
| :---     | :--- | :---:   | :---:    | :---        |
| port | number |  | false | Port the client should connect to. |
| host | string |  | true | Host the client should connect to. |
| connectListener | function |  | true | Common parameter of socket.connect() methods. Will be added as a listener for the 'connect' event once. |


### [`send(msg, offset, length, port, address, callback)`](https://github.com/socketsupply/io/blob/master/dgram.js#L413)

Broadcasts a datagram on the socket. For connectionless sockets, the
 destination port and address must be specified. Connected sockets, on the
 other hand, will use their associated remote endpoint, so the port and
 address arguments must not be set.

 > The msg argument contains the message to be sent. Depending on its type,
 different behavior can apply. If msg is a Buffer, any TypedArray or a
 DataView, the offset and length specify the offset within the Buffer where
 the message begins and the number of bytes in the message, respectively.
 If msg is a String, then it is automatically converted to a Buffer with
 'utf8' encoding. With messages that contain multi-byte characters, offset
 and length will be calculated with respect to byte length and not the
 character position. If msg is an array, offset and length must not be
 specified.

 > The address argument is a string. If the value of address is a host name,
 DNS will be used to resolve the address of the host. If address is not
 provided or otherwise nullish, '127.0.0.1' (for udp4 sockets) or '::1'
 (for udp6 sockets) will be used by default.

 > If the socket has not been previously bound with a call to bind, the socket
 is assigned a random port number and is bound to the "all interfaces"
 address ('0.0.0.0' for udp4 sockets, '::0' for udp6 sockets.)

 > An optional callback function may be specified to as a way of reporting DNS
 errors or for determining when it is safe to reuse the buf object. DNS
 lookups delay the time to send for at least one tick of the Node.js event
 loop.

 > The only way to know for sure that the datagram has been sent is by using a
 callback. If an error occurs and a callback is given, the error will be
 passed as the first argument to the callback. If a callback is not given,
 the error is emitted as an 'error' event on the socket object.

 > Offset and length are optional but both must be set if either are used.
 They are supported only when the first argument is a Buffer, a TypedArray,
 or a DataView.


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| msg | Buffer \| TypedArray \| DataView \| string \| Array |  | false | Message to be sent. |
| offset | integer |  | false | Offset in the buffer where the message starts. |
| length | integer |  | false | Number of bytes in the message. |
| port | integer |  | false | Destination port. |
| address | string |  | false | Destination host name or IP address. |
| callback | Function |  | false | Called when the message has been sent. |


### [`close(callback)`](https://github.com/socketsupply/io/blob/master/dgram.js#L510)

Close the underlying socket and stop listening for data on it. If a
 callback is provided, it is added as a listener for the 'close' event.


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| callback | function |  | false | Called when the connection is completed or on error. |


### [`address()`](https://github.com/socketsupply/io/blob/master/dgram.js#L556)

Returns an object containing the address information for a socket. For
 UDP sockets, this object will contain address, family, and port properties.

 This method throws EBADF if called on an unbound socket.

| Return Value | Type | Description |
| :---         | :--- | :---        |
| socketInfo | Object | Information about the local socket |
| socketInfo.address | string | The IP address of the socket |
| socketInfo.port | string | The port of the socket |
| socketInfo.family | string | The IP family of the socket |


### [`remoteAddress()`](https://github.com/socketsupply/io/blob/master/dgram.js#L581)

Returns an object containing the address, family, and port of the remote
 endpoint. This method throws an ERR_SOCKET_DGRAM_NOT_CONNECTED exception
 if the socket is not connected.


| Return Value | Type | Description |
| :---         | :--- | :---        |
| socketInfo | Object | Information about the remote socket |
| socketInfo.address | string | The IP address of the socket |
| socketInfo.port | string | The port of the socket |
| socketInfo.family | string | The IP family of the socket |


# [DNS](https://github.com/socketsupply/io/blob/master/dns/index.js#L13)


 This module enables name resolution. For example, use it to look up IP
 addresses of host names. Although named for the Domain Name System (DNS),
 it does not always use the DNS protocol for lookups. dns.lookup() uses the
 operating system facilities to perform name resolution. It may not need to
 perform any network communication. To perform name resolution the way other
 applications on the same system do, use dns.lookup().

## [`lookup(hostname, opts, cb)`](https://github.com/socketsupply/io/blob/master/dns/index.js#L45)

External docs: https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback
Resolves a host name (e.g. `example.org`) into the first found A (IPv4) or
 AAAA (IPv6) record. All option properties are optional. If options is an
 integer, then it must be 4 or 6 – if options is 0 or not provided, then IPv4
 and IPv6 addresses are both returned if found.

 From the node.js website...

 > With the all option set to true, the arguments for callback change to (err,
 addresses), with addresses being an array of objects with the properties
 address and family.

 > On error, err is an Error object, where err.code is the error code. Keep in
 mind that err.code will be set to 'ENOTFOUND' not only when the host name does
 not exist but also when the lookup fails in other ways such as no available
 file descriptors. dns.lookup() does not necessarily have anything to do with
 the DNS protocol. The implementation uses an operating system facility that
 can associate names with addresses and vice versa. This implementation can
 have subtle but important consequences on the behavior of any Node.js program.
 Please take some time to consult the Implementation considerations section
 before using dns.lookup().


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| hostname | string |  | false | The host name to resolve. |
| opts | Object |  | false | An options object. |
| opts.family | number \| string |  | false | The record family. Must be 4, 6, or 0. For backward compatibility reasons,'IPv4' and 'IPv6' are interpreted as 4 and 6 respectively. The value 0 indicates that IPv4 and IPv6 addresses are both returned. Default: 0. |
| cb | function |  | false | The function to call after the method is complete. |


# [DNS.promises](https://github.com/socketsupply/io/blob/master/dns/promises.js#L13)


 This module enables name resolution. For example, use it to look up IP
 addresses of host names. Although named for the Domain Name System (DNS),
 it does not always use the DNS protocol for lookups. dns.lookup() uses the
 operating system facilities to perform name resolution. It may not need to
 perform any network communication. To perform name resolution the way other
 applications on the same system do, use dns.lookup().

## [`lookup(hostname, opts)`](https://github.com/socketsupply/io/blob/master/dns/promises.js#L23)

External docs: https://nodejs.org/api/dns.html#dnspromiseslookuphostname-options


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| hostname | string |  | false | The host name to resolve. |
| opts | Object |  | false | An options object. |
| opts.family | number \| string |  | false | The record family. Must be 4, 6, or 0. For backward compatibility reasons,'IPv4' and 'IPv6' are interpreted as 4 and 6 respectively. The value 0 indicates that IPv4 and IPv6 addresses are both returned. Default: 0. |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Promise |  |


# [File System](https://github.com/socketsupply/io/blob/master/fs/index.js#L24)


 This module enables interacting with the file system in a way modeled on
 standard POSIX functions.
 
 The Application Sandbox restricts access to the file system.
 Please see the Application Sandbox documentation for more information:
 https://sockets.sh/guides/#working-with-the-file-system-on-ios

 To use the promise-based APIs:

 ```js
 import * as fs from '@socketsupply/io/fs/promises.js';
 ```

 To use the callback and async APIs:

 ```js
 import * as fs from '@socketsupply/io/fs/index.js';
 ```

## [`access(path, mode , callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L76)

Asynchronously check access a file for a given mode calling `callback`
 upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| mode | string | F_OK(0) | true |  |
| callback | function(err, fd) |  | false |  |


## [`appendFile()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L92)

This is a `FunctionDeclaration` named `appendFile` in `fs/index.js`, it's exported but undocumented.


## [`chmod()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L95)

This is a `FunctionDeclaration` named `chmod` in `fs/index.js`, it's exported but undocumented.


## [`chown()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L113)

This is a `FunctionDeclaration` named `chown` in `fs/index.js`, it's exported but undocumented.


## [`close(fd, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L122)

Asynchronously close a file descriptor calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| callback | function(err) |  | false |  |


## [`copyFile()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L138)

This is a `FunctionDeclaration` named `copyFile` in `fs/index.js`, it's exported but undocumented.


## [`createReadStream()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L141)

This is a `FunctionDeclaration` named `createReadStream` in `fs/index.js`, it's exported but undocumented.


## [`createWriteStream()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L175)

This is a `FunctionDeclaration` named `createWriteStream` in `fs/index.js`, it's exported but undocumented.


## [`fstat(fd, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L217)

Invokes the callback with the <fs.Stats> for the file descriptor. See
 the POSIX fstat(2) documentation for more detail.


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| fd | number |  | false | A file descriptor. |
| options | Object |  | false | An options object. |
| callback | function |  | false | The function to call after completion. |


## [`lchmod()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L238)

This is a `FunctionDeclaration` named `lchmod` in `fs/index.js`, it's exported but undocumented.


## [`lchown()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L241)

This is a `FunctionDeclaration` named `lchown` in `fs/index.js`, it's exported but undocumented.


## [`lutimes()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L244)

This is a `FunctionDeclaration` named `lutimes` in `fs/index.js`, it's exported but undocumented.


## [`link()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L247)

This is a `FunctionDeclaration` named `link` in `fs/index.js`, it's exported but undocumented.


## [`lstat()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L250)

This is a `FunctionDeclaration` named `lstat` in `fs/index.js`, it's exported but undocumented.


## [`mkdir()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L253)

This is a `FunctionDeclaration` named `mkdir` in `fs/index.js`, it's exported but undocumented.


## [`open(path, flags , mode , callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L264)

Asynchronously open a file calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| flags | string | r | true |  |
| mode | string | 0o666 | true |  |
| callback | function(err, fd) |  | false |  |


## [`opendir(path, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L317)

Asynchronously open a directory calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| options | Object |  | true |  |
| options.encoding | string | utf8 | true |  |
| options.withFileTypes | boolean | false | true |  |
| callback | function(err, fd) |  | false |  |


## [`read(fd, buffer)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L339)

Asynchronously read from an open file descriptor.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| buffer | object \| Buffer \| TypedArray |  | false |  |


## [`readdir(path, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L371)

Asynchronously read all entries in a directory.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL  |  | false |  |
| options | object |  | false |  |
| callback | function(err, buffer) |  | false |  |


## [`readFile(path, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L419)



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL \| number  |  | false |  |
| options | object |  | false |  |
| callback | function(err, buffer) |  | false |  |


## [`readlink()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L457)

This is a `FunctionDeclaration` named `readlink` in `fs/index.js`, it's exported but undocumented.


## [`realpath()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L460)

This is a `FunctionDeclaration` named `realpath` in `fs/index.js`, it's exported but undocumented.


## [`rename()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L463)

This is a `FunctionDeclaration` named `rename` in `fs/index.js`, it's exported but undocumented.


## [`rmdir()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L466)

This is a `FunctionDeclaration` named `rmdir` in `fs/index.js`, it's exported but undocumented.


## [`rm()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L469)

This is a `FunctionDeclaration` named `rm` in `fs/index.js`, it's exported but undocumented.


## [`stat()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L472)

This is a `FunctionDeclaration` named `stat` in `fs/index.js`, it's exported but undocumented.


## [`symlink()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L501)

This is a `FunctionDeclaration` named `symlink` in `fs/index.js`, it's exported but undocumented.


## [`truncate()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L504)

This is a `FunctionDeclaration` named `truncate` in `fs/index.js`, it's exported but undocumented.


## [`unlink()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L507)

This is a `FunctionDeclaration` named `unlink` in `fs/index.js`, it's exported but undocumented.


## [`utimes()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L510)

This is a `FunctionDeclaration` named `utimes` in `fs/index.js`, it's exported but undocumented.


## [`watch()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L513)

This is a `FunctionDeclaration` named `watch` in `fs/index.js`, it's exported but undocumented.


## [`write()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L516)

This is a `FunctionDeclaration` named `write` in `fs/index.js`, it's exported but undocumented.


## [`writeFile()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L519)

This is a `FunctionDeclaration` named `writeFile` in `fs/index.js`, it's exported but undocumented.


## [`writev()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L556)

This is a `FunctionDeclaration` named `writev` in `fs/index.js`, it's exported but undocumented.


# [FS.promises](https://github.com/socketsupply/io/blob/master/fs/promises.js#L4)



## [`access(path, mode , options)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L36)

Asynchronously check access a file.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| mode | string | F_OK(0) | true |  |
| options | object |  | true |  |


## [`appendFile()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L43)



## [`chmod()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L49)



## [`chown()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L55)



## [`copyFile()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L61)



## [`lchmod()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L67)



## [`lchown()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L73)



## [`lutimes()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L79)



## [`link()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L85)



## [`lstat()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L91)



## [`mkdir()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L97)



## [`open(path, flags, mode)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L109)

Asynchronously open a file.
 https://nodejs.org/api/fs.html#fspromisesopenpath-flags-mode


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| flags | string |  | false | default: 'r' |
| mode | string |  | false | default: 0o666 |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Promise<FileHandle> |  |


## [`opendir()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L116)



## [`readdir()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L124)



## [`readFile(path, options)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L153)



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string |  | false |  |
| options | object |  | true |  |


## [`readlink()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L169)



## [`realpath()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L175)



## [`rename()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L181)



## [`rmdir()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L187)



## [`rm()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L193)



## [`stat()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L199)



## [`symlink()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L205)



## [`truncate()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L211)



## [`unlink()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L217)



## [`utimes()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L223)



## [`watch()`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L229)



## [`writeFile(path, data, options)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L238)



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string |  | false |  |
| data | string \| Buffer \| Array \| TypedArray |  | false |  |
| options | object |  | true |  |


# [FS.Stream](https://github.com/socketsupply/io/blob/master/fs/stream.js#L4)



## [DEFAULT_STREAM_HIGH_WATER_MARK](https://github.com/socketsupply/io/blob/master/fs/stream.js#L7)

This is a `VariableDeclaration` named `DEFAULT_STREAM_HIGH_WATER_MARK` in `fs/stream.js`, it's exported but undocumented.


## [`ReadStream` (extends `Readable`)](https://github.com/socketsupply/io/blob/master/fs/stream.js#L12)

A `Readable` stream for a `FileHandle`.

### [`constructor()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L17)

`ReadStream` class constructor

### [`setHandle(handle)`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L53)

Sets file handle for the ReadStream.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| handle | FileHandle |  | false |  |


### [`highWaterMark()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L60)

The max buffer size for the ReadStream.

### [`path()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L67)

Relative or absolute path of the underlying `FileHandle`.

### [`pending()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L74)

`true` if the stream is in a pending state.

### [`emit()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L82)

Handles `shouldEmitClose` setting from `options.emitClose` in constructor.

## [`WriteStream` (extends `Writable`)](https://github.com/socketsupply/io/blob/master/fs/stream.js#L163)

A `Writable` stream for a `FileHandle`.

### [`constructor()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L168)

`WriteStream` class constructor

### [`setHandle(handle)`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L195)

Sets file handle for the WriteStream.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| handle | FileHandle |  | false |  |


### [`highWaterMark()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L202)

The max buffer size for the Writetream.

### [`path()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L209)

Relative or absolute path of the underlying `FileHandle`.

### [`pending()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L216)

`true` if the stream is in a pending state.

### [`emit()`](https://github.com/socketsupply/io/blob/master/fs/stream.js#L251)

Handles `shouldEmitClose` setting from `options.emitClose` in constructor.

## [FileReadStream](https://github.com/socketsupply/io/blob/master/fs/stream.js#L324)

This is a `VariableDeclaration` named `FileReadStream` in `fs/stream.js`, it's exported but undocumented.


## [FileWriteStream](https://github.com/socketsupply/io/blob/master/fs/stream.js#L325)

This is a `VariableDeclaration` named `FileWriteStream` in `fs/stream.js`, it's exported but undocumented.


# [IPC](https://github.com/socketsupply/io/blob/master/ipc.js#L27)


 This is a low level API which you don't need unless you are implementing
 a library on top of Socket SDK. A Socket SDK app has two or three processes.

 - The `Render` process, the UI where the HTML, CSS and JS is run.
 - The `Bridge` process, the thin layer of code that managers everything.
 - The `Main` processs, for apps that need to run heavier compute jobs. And
   unlike electron it's optional.

 The Bridge process manages the Render and Main process, it may also broker
 data between them.

 The Binding process uses standard input and output as a way to communicate.
 Data written to the write-end of the pipe is buffered by the OS until it is
 read from the read-end of the pipe.

 The IPC protocol uses a simple URI-like scheme. Data is passed as ArrayBuffers.

 ```uri
 ipc://command?key1=value1&key2=value2...
 ```

## [OK](https://github.com/socketsupply/io/blob/master/ipc.js#L120)

Represents an OK IPC status.

## [ERROR](https://github.com/socketsupply/io/blob/master/ipc.js#L125)

Represents an ERROR IPC status.

## [TIMEOUT](https://github.com/socketsupply/io/blob/master/ipc.js#L130)

Timeout in milliseconds for IPC requests.

## [kDebugEnabled](https://github.com/socketsupply/io/blob/master/ipc.js#L135)

Symbol for the `ipc.debug.enabled` property

## [`parseSeq(seq, options)`](https://github.com/socketsupply/io/blob/master/ipc.js#L143)

Parses `seq` as integer value

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| seq | string \| number |  | false |  |
| options | object |  | true |  |
| options.bigint | boolean | false | false |  |


## [`debug(enable)`](https://github.com/socketsupply/io/blob/master/ipc.js#L153)

If `debug.enabled === true`, then debug output will be printed to console.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| enable | boolean |  | false |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | boolean |  |


## [`Message` (extends `URL`)](https://github.com/socketsupply/io/blob/master/ipc.js#L185)

A container for a IPC message based on a `ipc://` URI scheme.

### [`PROTOCOL()`](https://github.com/socketsupply/io/blob/master/ipc.js#L190)

The expected protocol for an IPC message.

### [`from(input, params)`](https://github.com/socketsupply/io/blob/master/ipc.js#L200)

Creates a `Message` instance from a variety of input.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| input | string \| URL \| Message \| Buffer \| object |  | false |  |
| params | object \| string \| URLSearchParams |  | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Message |  |


### [`isValidInput(input)`](https://github.com/socketsupply/io/blob/master/ipc.js#L245)

Predicate to determine if `input` is valid for constructing
 a new `Message` instance.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| input | string \| URL \| Message \| Buffer \| object |  | false |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | boolean |  |


### [`constructor(input)`](https://github.com/socketsupply/io/blob/master/ipc.js#L260)

`Message` class constructor.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| input | string \| URL |  | false |  |


### [`command()`](https://github.com/socketsupply/io/blob/master/ipc.js#L273)

Computed command for the IPC message.

### [`id()`](https://github.com/socketsupply/io/blob/master/ipc.js#L280)

Computed `id` value for the command.

### [`seq()`](https://github.com/socketsupply/io/blob/master/ipc.js#L287)

Computed `seq` (sequence) value for the command.

### [`value()`](https://github.com/socketsupply/io/blob/master/ipc.js#L295)

Computed message value potentially given in message parameters.
 This value is automatically decoded, but not treated as JSON.

### [`index()`](https://github.com/socketsupply/io/blob/master/ipc.js#L304)

Computed `index` value for the command potentially referring to
 the window index the command is scoped to or originating from. If not
 specified in the message parameters, then this value defaults to `-1`.

### [`json()`](https://github.com/socketsupply/io/blob/master/ipc.js#L321)

Computed value parsed as JSON. This value is `null` if the value is not present
 or it is invalid JSON.

### [`params()`](https://github.com/socketsupply/io/blob/master/ipc.js#L333)

Computed readonly object of message parameters.

### [`entries()`](https://github.com/socketsupply/io/blob/master/ipc.js#L341)

Returns computed parameters as entries

| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Array<Array<string,mixed>> |  |


### [`set(key, value)`](https://github.com/socketsupply/io/blob/master/ipc.js#L357)

Set a parameter `value` by `key`.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| key | string |  | false |  |
| value | mixed |  | false |  |


### [`get(key, defaultValue)`](https://github.com/socketsupply/io/blob/master/ipc.js#L371)

Get a parameter value by `key`.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| key | string |  | false |  |
| defaultValue | mixed |  | false |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | mixed |  |


### [`delete(key)`](https://github.com/socketsupply/io/blob/master/ipc.js#L391)

Delete a parameter by `key`.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| key | string |  | false |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | boolean |  |


### [`keys()`](https://github.com/socketsupply/io/blob/master/ipc.js#L403)

Computed parameter keys.

| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Array<string> |  |


### [`values()`](https://github.com/socketsupply/io/blob/master/ipc.js#L411)

Computed parameter values.

| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Array<mixed> |  |


### [`has(key)`](https://github.com/socketsupply/io/blob/master/ipc.js#L427)

Predicate to determine if parameter `key` is present in parameters.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| key | string |  | false |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | boolean |  |


### [`toJSON()`](https://github.com/socketsupply/io/blob/master/ipc.js#L434)

Converts a `Message` instance into a plain JSON object.

## [Result](https://github.com/socketsupply/io/blob/master/ipc.js#L446)

A result type used internally for handling
 IPC result values from the native layer that are in the form
 of `{ err?, data? }`. The `data` and `err` properties on this
 type of object are in tuple form and be accessed at `[data?,err?]`

### [`from(result)`](https://github.com/socketsupply/io/blob/master/ipc.js#L454)

Creates a `Result` instance from input that may be an object
 like `{ err?, data? }`, an `Error` instance, or just `data`.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| result | object \| Error \| mixed |  | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Result |  |


### [`constructor(data, err)`](https://github.com/socketsupply/io/blob/master/ipc.js#L477)

`Result` class constructor.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| data | object |  | true |  |
| err | Error |  | true |  |


## [`ready()`](https://github.com/socketsupply/io/blob/master/ipc.js#L514)

Waits for the native IPC layer to be ready and exposed on the
 global window object.

## [`sendSync(command, params)`](https://github.com/socketsupply/io/blob/master/ipc.js#L539)

Sends a synchronous IPC command over XHR returning a `Result`
 upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| command | string |  | false |  |
| params | object \| string |  | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Result |  |


## [`emit()`](https://github.com/socketsupply/io/blob/master/ipc.js#L607)

This is a `FunctionDeclaration` named `emit` in `ipc.js`, it's exported but undocumented.


## [`resolve()`](https://github.com/socketsupply/io/blob/master/ipc.js#L617)

This is a `FunctionDeclaration` named `resolve` in `ipc.js`, it's exported but undocumented.


## [`send()`](https://github.com/socketsupply/io/blob/master/ipc.js#L627)

This is a `FunctionDeclaration` named `send` in `ipc.js`, it's exported but undocumented.


## [`write()`](https://github.com/socketsupply/io/blob/master/ipc.js#L644)

This is a `FunctionDeclaration` named `write` in `ipc.js`, it's exported but undocumented.


## [`request()`](https://github.com/socketsupply/io/blob/master/ipc.js#L739)

This is a `FunctionDeclaration` named `request` in `ipc.js`, it's exported but undocumented.


## [`createBinding(domain, ctx)`](https://github.com/socketsupply/io/blob/master/ipc.js#L842)

Factory for creating a proxy based IPC API.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| domain | string |  | false |  |
| ctx | function \| object |  | true |  |
| ctx.default | string |  | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Proxy |  |


# [OS](https://github.com/socketsupply/io/blob/master/os.js#L8)


 This module provides normalized system information from all the major
 operating systems.

## [`arch()`](https://github.com/socketsupply/io/blob/master/os.js#L19)

This is a `FunctionDeclaration` named `arch` in `os.js`, it's exported but undocumented.


## [`networkInterfaces()`](https://github.com/socketsupply/io/blob/master/os.js#L52)

This is a `FunctionDeclaration` named `networkInterfaces` in `os.js`, it's exported but undocumented.


## [`platform()`](https://github.com/socketsupply/io/blob/master/os.js#L128)

This is a `FunctionDeclaration` named `platform` in `os.js`, it's exported but undocumented.


## [`type()`](https://github.com/socketsupply/io/blob/master/os.js#L157)

This is a `FunctionDeclaration` named `type` in `os.js`, it's exported but undocumented.


## [EOL](https://github.com/socketsupply/io/blob/master/os.js#L197)

This is a `VariableDeclaration` named `EOL` in `os.js`, it's exported but undocumented.


# [Path](https://github.com/socketsupply/io/blob/master/path/path.js#L4)



## [Path](https://github.com/socketsupply/io/blob/master/path/path.js#L9)

This is a `ClassDeclaration` named `Path` in `path/path.js`, it's exported but undocumented.


### [`cwd(opts)`](https://github.com/socketsupply/io/blob/master/path/path.js#L16)

Computes current working directory for a path

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| opts | object |  | true |  |
| opts.posix Set to `true` to force POSIX style path | boolean |  | true |  |


### [`constructor(opts)`](https://github.com/socketsupply/io/blob/master/path/path.js#L45)

`Path` class constructor.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| opts | object |  | true |  |
| opts.root | string |  | true |  |
| opts.base | string |  | true |  |
| opts.name | string |  | true |  |
| opts.dir | string |  | true |  |
| opts.ext | string |  | true |  |


### [`resolve()`](https://github.com/socketsupply/io/blob/master/path/path.js#L61)



### [`normalize()`](https://github.com/socketsupply/io/blob/master/path/path.js#L67)



# [Process](https://github.com/socketsupply/io/blob/master/process.js#L4)



## [`homedir()`](https://github.com/socketsupply/io/blob/master/process.js#L12)



| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | string | The home directory of the current user. |


## [`exit(code)`](https://github.com/socketsupply/io/blob/master/process.js#L19)



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| code | number | 0 | true | The exit code. Default: 0. |


# [Stream](https://github.com/socketsupply/io/blob/master/stream.js#L5)


