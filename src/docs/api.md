
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

## [webcrypto](https://github.com/socketsupply/io/blob/master/crypto.js#L16)

WebCrypto API

## [`getRandomValues(buffer)`](https://github.com/socketsupply/io/blob/master/crypto.js#L24)

External docs: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues

Generate cryptographically strong random values into `buffer`

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| buffer | TypedArray |  | false |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | TypedArray |  |


## [`randomBytes(size)`](https://github.com/socketsupply/io/blob/master/crypto.js#L38)

Generate `size` random bytes.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| size | number |  | false | The number of bytes to generate. The size must not be larger than 2**31 - 1. |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Buffer | A promise that resolves with an instance of io.Buffer with random bytes. |


## [`createDigest(algorithm, message)`](https://github.com/socketsupply/io/blob/master/crypto.js#L49)



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

## [`ERR_SOCKET_ALREADY_BOUND` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L35)

Thrown when a socket is already bound.

## [`ERR_SOCKET_DGRAM_IS_CONNECTED` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L52)

Thrown when the socket is already connected.

## [`ERR_SOCKET_DGRAM_NOT_CONNECTED` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L59)

Thrown when the socket is not connected.

## [`ERR_SOCKET_DGRAM_NOT_RUNNING` (extends `SocketError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L67)

Thrown when the socket is not running (not bound or connected).

## [`ERR_SOCKET_BAD_TYPE` (extends `TypeError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L74)

Thrown when a bad socket type is used in an argument.

## [`ERR_SOCKET_BAD_PORT` (extends `RangeError`)](https://github.com/socketsupply/io/blob/master/dgram.js#L84)

Thrown when a bad port is given.

## [`createSocket(options, callback)`](https://github.com/socketsupply/io/blob/master/dgram.js#L481)

Creates a `Socket` instance.
    if ()

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


## [`Socket` (extends `EventEmitter`)](https://github.com/socketsupply/io/blob/master/dgram.js#L487)

New instances of dgram.Socket are created using dgram.createSocket().
 The new keyword is not to be used to create dgram.Socket instances.

### [`bind(port, address, callback)`](https://github.com/socketsupply/io/blob/master/dgram.js#L544)

External docs: https://nodejs.org/api/dgram.html#socketbindport-address-callback

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


### [`connect(port, host, connectListener)`](https://github.com/socketsupply/io/blob/master/dgram.js#L643)

External docs: https://nodejs.org/api/dgram.html#socketconnectport-address-callback

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


### [`disconnect()`](https://github.com/socketsupply/io/blob/master/dgram.js#L688)

External docs: https://nodejs.org/api/dgram.html#socketdisconnect

A synchronous function that disassociates a connected dgram.Socket from
 its remote address. Trying to call disconnect() on an unbound or already
 disconnected socket will result in an ERR_SOCKET_DGRAM_NOT_CONNECTED exception.


### [`send(msg, offset, length, port, address, callback)`](https://github.com/socketsupply/io/blob/master/dgram.js#L749)

External docs: https://nodejs.org/api/dgram.html#socketsendmsg-offset-length-port-address-callback

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
| offset | integer |  | true | Offset in the buffer where the message starts. |
| length | integer |  | true | Number of bytes in the message. |
| port | integer |  | true | Destination port. |
| address | string |  | true | Destination host name or IP address. |
| callback | Function |  | true | Called when the message has been sent. |


### [`close(callback)`](https://github.com/socketsupply/io/blob/master/dgram.js#L839)

External docs: https://nodejs.org/api/dgram.html#socketclosecallback

Close the underlying socket and stop listening for data on it. If a
 callback is provided, it is added as a listener for the 'close' event.



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| callback | function |  | true | Called when the connection is completed or on error. |


### [`address()`](https://github.com/socketsupply/io/blob/master/dgram.js#L897)

External docs: https://nodejs.org/api/dgram.html#socketaddress

Returns an object containing the address information for a socket. For
 UDP sockets, this object will contain address, family, and port properties.

 This method throws EBADF if called on an unbound socket.


| Return Value | Type | Description |
| :---         | :--- | :---        |
| socketInfo | Object | Information about the local socket |
| socketInfo.address | string | The IP address of the socket |
| socketInfo.port | string | The port of the socket |
| socketInfo.family | string | The IP family of the socket |


### [`remoteAddress()`](https://github.com/socketsupply/io/blob/master/dgram.js#L928)

External docs: https://nodejs.org/api/dgram.html#socketremoteaddress

Returns an object containing the address, family, and port of the remote
 endpoint. This method throws an ERR_SOCKET_DGRAM_NOT_CONNECTED exception
 if the socket is not connected.


| Return Value | Type | Description |
| :---         | :--- | :---        |
| socketInfo | Object | Information about the remote socket |
| socketInfo.address | string | The IP address of the socket |
| socketInfo.port | string | The port of the socket |
| socketInfo.family | string | The IP family of the socket |


### [`setRecvBufferSize(size)`](https://github.com/socketsupply/io/blob/master/dgram.js#L955)

External docs: https://nodejs.org/api/dgram.html#socketsetrecvbuffersizesize

Sets the SO_RCVBUF socket option. Sets the maximum socket receive buffer in
 bytes.


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| size | number |  | false | The size of the new receive buffer |


### [`setSendBufferSize(size)`](https://github.com/socketsupply/io/blob/master/dgram.js#L966)

External docs: https://nodejs.org/api/dgram.html#socketsetsendbuffersizesize

Sets the SO_SNDBUF socket option. Sets the maximum socket send buffer in
 bytes.


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| size | number |  | false | The size of the new send buffer |


### [`getRecvBufferSize()`](https://github.com/socketsupply/io/blob/master/dgram.js#L973)

External docs: https://nodejs.org/api/dgram.html#socketgetrecvbuffersize



### [`getSendBufferSize()`](https://github.com/socketsupply/io/blob/master/dgram.js#L981)

External docs: https://nodejs.org/api/dgram.html#socketgetsendbuffersize



| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | number | the SO_SNDBUF socket send buffer size in bytes. |


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
| opts | Object |  | true | An options object. |
| opts.family | number \| string | 0 | false | The record family. Must be 4, 6, or 0. For backward compatibility reasons,'IPv4' and 'IPv6' are interpreted as 4 and 6 respectively. The value 0 indicates that IPv4 and IPv6 addresses are both returned. Default: 0. |
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
| opts | Object |  | true | An options object. |
| opts.family | number \| string | 0 | false | The record family. Must be 4, 6, or 0. For backward compatibility reasons,'IPv4' and 'IPv6' are interpreted as 4 and 6 respectively. The value 0 indicates that IPv4 and IPv6 addresses are both returned. Default: 0. |


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

External docs: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsopenpath-flags-mode-callback

Asynchronously check access a file for a given mode calling `callback`
 upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| mode | string | F_OK(0) | true |  |
| callback | function(err, fd) |  | false |  |


## [`chmod(path, mode, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L109)

External docs: https://nodejs.org/api/fs.html#fschmodpath-mode-callback

Asynchronously changes the permissions of a file.
 No arguments other than a possible exception are given to the completion callback
 
 

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| mode | number |  | false |  |
| callback | function(err) |  | false |  |


## [`close(fd, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L139)

Asynchronously close a file descriptor calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| callback | function(err) |  | true |  |


## [`copyFile()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L155)

This is a `FunctionDeclaration` named `copyFile` in `fs/index.js`, it's exported but undocumented.


## [`createReadStream(path, options)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L164)

External docs: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fscreatewritestreampath-options



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| options | object |  | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | fs.ReadStream |  |


## [`createWriteStream(path, options)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L204)

External docs: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fscreatewritestreampath-options



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| options | object |  | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | fs.WriteStream |  |


## [`fstat(fd, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L248)

External docs: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsfstatfd-options-callback

Invokes the callback with the <fs.Stats> for the file descriptor. See
 the POSIX fstat(2) documentation for more detail.

 

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| fd | number |  | false | A file descriptor. |
| options | Object |  | true | An options object. |
| callback | function |  | false | The function to call after completion. |


## [`open(path, flags , mode , callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L308)

Asynchronously open a file calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| flags | string | r | true |  |
| mode | string | 0o666 | true |  |
| callback | function(err, fd) |  | false |  |


## [`opendir(path, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L361)

Asynchronously open a directory calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| options | Object |  | true |  |
| options.encoding | string | utf8 | true |  |
| options.withFileTypes | boolean | false | true |  |
| callback | function(err, fd) |  | false |  |


## [`read(fd, buffer, offset, length, position, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L387)

Asynchronously read from an open file descriptor.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| buffer | object \| Buffer \| TypedArray |  | false | The buffer that the data will be written to. |
| offset | number |  | false | The position in buffer to write the data to. |
| length | number |  | false | The number of bytes to read. |
| position | number \| BigInt \| null |  | false | Specifies where to begin reading from in the file. If position is null or -1 , data will be read from the current file position, and the file position will be updated. If position is an integer, the file position will be unchanged. |
| callback | function(err, bytesRead, buffer) |  | false |  |


## [`readdir(path, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L421)

Asynchronously read all entries in a directory.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL  |  | false |  |
| options | object |  | true |  |
| options.encoding | string | utf8 | true |  |
| options.withFileTypes | boolean | false | true |  |
| callback | function(err, buffer) |  | false |  |


## [`readFile(path, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L472)



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL \| number  |  | false |  |
| options | object |  | true |  |
| options.encoding | string | utf8 | true |  |
| options.flag | string | r | true |  |
| options.signal | AbortSignal |  | true |  |
| callback | function(err, buffer) |  | false |  |


## [`stat(path, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L545)



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL \| number  |  | false | filename or file descriptor |
| options | object |  | true |  |
| options.encoding | string | utf8 | true |  |
| options.flag | string | r | true |  |
| options.signal | AbortSignal |  | true |  |
| callback | function(err, data) |  | false |  |


## [`writeFile(path, data, options, callback)`](https://github.com/socketsupply/io/blob/master/fs/index.js#L615)



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL \| number  |  | false | filename or file descriptor |
| data | string \| Buffer \| TypedArray \| DataView \| object  |  | false |  |
| options | object |  | true |  |
| options.encoding | string | utf8 | true |  |
| options.mode | string | 0o666 | true |  |
| options.flag | string | w | true |  |
| options.signal | AbortSignal |  | true |  |
| callback | function(err) |  | false |  |


## [`writev()`](https://github.com/socketsupply/io/blob/master/fs/index.js#L652)

This is a `FunctionDeclaration` named `writev` in `fs/index.js`, it's exported but undocumented.


# [FS.promises](https://github.com/socketsupply/io/blob/master/fs/promises.js#L4)



## [`access(path, mode, options)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L36)

External docs: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fspromisesaccesspath-mode

Asynchronously check access a file.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| mode | string |  | true |  |
| options | object |  | true |  |


## [`open(path, flags, mode)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L119)

External docs: https://nodejs.org/api/fs.html#fspromisesopenpath-flags-mode

Asynchronously open a file.


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| flags | string |  | false | default: 'r' |
| mode | string |  | false | default: 0o666 |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Promise<FileHandle> |  |


## [`opendir(path, options)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L131)

External docs: https://nodejs.org/api/fs.html#fspromisesopendirpath-options



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| options | object |  | true |  |
| options.encoding | string | utf8 | true |  |
| options.bufferSize | number | 32 | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Promise<FileSystem,Dir> |  |


## [`readdir(path, options)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L143)

External docs: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fspromisesreaddirpath-options



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer \| URL |  | false |  |
| options | object |  | true |  |
| options.encoding | string | utf8 | true |  |
| options.withFileTypes | boolean | false | true |  |


## [`readFile(path, options)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L176)

External docs: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fspromisesreadfilepath-options



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string |  | false |  |
| options | object |  | true |  |
| options.encoding | string \| null | null | true |  |
| options.flag | string | r | true |  |
| options.signal | AbortSignal |  | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Promise<Buffer | string> |  |


## [`writeFile(path, data, options)`](https://github.com/socketsupply/io/blob/master/fs/promises.js#L272)

External docs: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fspromiseswritefilefile-data-options



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

### [`from(result, maybeError, maybeSource)`](https://github.com/socketsupply/io/blob/master/ipc.js#L456)

Creates a `Result` instance from input that may be an object
 like `{ err?, data? }`, an `Error` instance, or just `data`.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| result | object \| Error \| mixed |  | true |  |
| maybeError | ?(Error) |  | false |  |
| maybeSource | ?(string) |  | false |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Result |  |


### [`constructor(err , data , source )`](https://github.com/socketsupply/io/blob/master/ipc.js#L489)

`Result` class constructor.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| err | ?(Error) | null | false |  |
| data | ?(object) | null | false |  |
| source | ?(string) | undefined | false |  |


### [`length()`](https://github.com/socketsupply/io/blob/master/ipc.js#L518)

Computed result length.

### [`undefined()`](https://github.com/socketsupply/io/blob/master/ipc.js#L525)

Generator for an `Iterable` interface over this instance.

## [`ready()`](https://github.com/socketsupply/io/blob/master/ipc.js#L536)

Waits for the native IPC layer to be ready and exposed on the
 global window object.

## [`sendSync(command, params)`](https://github.com/socketsupply/io/blob/master/ipc.js#L561)

Sends a synchronous IPC command over XHR returning a `Result`
 upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| command | string |  | false |  |
| params | object \| string |  | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Result |  |


## [`emit(name)`](https://github.com/socketsupply/io/blob/master/ipc.js#L638)

Emit event to be dispatched on `window` object.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| name | string |  | false |  |
| ...args | ..Mixed |  | false |  |


## [`resolve(seq)`](https://github.com/socketsupply/io/blob/master/ipc.js#L653)

Resolves a request by `seq` with possible value.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| seq | string |  | false |  |
| ...args | ..Mixed |  | false |  |


## [`send(command)`](https://github.com/socketsupply/io/blob/master/ipc.js#L668)

Sends an async IPC command request with parameters.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| command | string |  | false |  |
| ...args | ..Mixed |  | false |  |


## [`write(command, params, buffer, options)`](https://github.com/socketsupply/io/blob/master/ipc.js#L696)

Sends an async IPC command request with parameters and buffered bytes.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| command | string |  | false |  |
| params | ?(object) |  | false |  |
| buffer | ?(Buffer \| TypeArray \| ArrayBuffer \| string \| Array) |  | false |  |
| options | ?(object) |  | false |  |


## [`request(command, params, options)`](https://github.com/socketsupply/io/blob/master/ipc.js#L802)

Sends an async IPC command request with parameters requesting a response
 with buffered bytes.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| command | string |  | false |  |
| params | ?(object) |  | false |  |
| options | ?(object) |  | false |  |


## [`createBinding(domain, ctx)`](https://github.com/socketsupply/io/blob/master/ipc.js#L910)

Factory for creating a proxy based IPC API.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| domain | string |  | false |  |
| ctx | function \| object |  | true |  |
| ctx.default | string |  | true |  |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | Proxy |  |


# [Network](https://github.com/socketsupply/io/blob/master/network.js#L21)


 The network module allows you to create basic, reliable swarms
 where messages can be broadcast or sent to a specific peer.

 ```js
 import io from '@socketsupply/io'
 const network = new io.Network()
 const swarm = network.createSwarm('my-swarm')

 swarm.on('peer', peer => {
   peer.send('hello')
   peer.on('message', d => {
     document.body.textContent += d.toString()
   })
 })
 ```

## [`Network` (extends `EventEmitter`)](https://github.com/socketsupply/io/blob/master/network.js#L66)

Creates an instance of the `Network` object. The network may contain
 one or more swarms. A swarm is a group of peers that are interested
 in a particular topic.


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| config | object |  | false | A configuration object |
| config.keepAlive | number |  | false | The interval of the ping in milliseconds |
| config.port | number |  | false | The UDP port that will be bound |
| config.spinPort | number |  | false | The UDP port that is used to detect static nat |
| config.introducer1 | object |  | false | If you have no state, you may need to be introduced to other peers. |
| config.introducer1.id | object |  | false | The id of the peer |
| config.introducer1.port | object |  | false | The UDP port of the peer |
| config.introducer1.address | object |  | false | The 'IPv4' or 'IPv6' port of the peer |
| config.introducer2 | object |  | false | If you have no state, you may need to be introduced to other peers. |
| config.introducer2.id | object |  | false | The id of the peer |
| config.introducer2.port | object |  | false | The UDP port of the peer |
| config.introducer2.address | object |  | false | The IPv4|IPv6 port of the peer |


### [`createSwarm(id, type)`](https://github.com/socketsupply/io/blob/master/network.js#L107)

Create a swarm on the network


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| id | string |  | false | a 32 byte buffer that uniquely identifies the swarm |
| type | string |  | false | the type of the swarm ('reliable' | undefined) |


| Return Value | Type | Description |
| :---         | :--- | :---        |
| Not specified | EventEmitter | an event emitter that provides events from the swarm |


# [OS](https://github.com/socketsupply/io/blob/master/os.js#L8)


 This module provides normalized system information from all the major
 operating systems.

## [`arch()`](https://github.com/socketsupply/io/blob/master/os.js#L20)

This is a `FunctionDeclaration` named `arch` in `os.js`, it's exported but undocumented.


## [`networkInterfaces()`](https://github.com/socketsupply/io/blob/master/os.js#L53)

This is a `FunctionDeclaration` named `networkInterfaces` in `os.js`, it's exported but undocumented.


## [`platform()`](https://github.com/socketsupply/io/blob/master/os.js#L129)

This is a `FunctionDeclaration` named `platform` in `os.js`, it's exported but undocumented.


## [`type()`](https://github.com/socketsupply/io/blob/master/os.js#L158)

This is a `FunctionDeclaration` named `type` in `os.js`, it's exported but undocumented.


## [`isWindows()`](https://github.com/socketsupply/io/blob/master/os.js#L198)

This is a `FunctionDeclaration` named `isWindows` in `os.js`, it's exported but undocumented.


## [`tmpdir()`](https://github.com/socketsupply/io/blob/master/os.js#L207)

This is a `FunctionDeclaration` named `tmpdir` in `os.js`, it's exported but undocumented.


## [EOL](https://github.com/socketsupply/io/blob/master/os.js#L249)

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


