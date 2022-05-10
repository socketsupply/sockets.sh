# Mobile API

Access to the app's native APIs is made though `window.parent`.

## TCP Server

### `tcp.createServer([options])`
Creates a new TCP server.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| options | Object | `{}` | | An optional options object |
| options.simultaneousAccepts | Boolean | true | | Enable / disable simultaneous asynchronous accept requests that are queued by the operating parent when listening for new TCP connections. See [libuv][uv0] docs for more info. |

**&larr; Return** `Server` (Instance of EventEmitter with the following events)

| Event | Description |
| :--- | :--- |
| `"listening"` | Emitted when the server has been bound after calling the `listen` method. |
| `"connection"` | Emitted when a new connection is made. The callback provides a single value, `socket`, which is an instance of `Socket` as described in this document. |
| `"data"` | Emitted when data is received. The argument data will be a Buffer or String. Encoding of data is set by the `setEncoding` method. The data will be lost if there is no listener when a Socket emits a 'data' event. |
| `"closed"` | Emitted when the connection has fully closed. |

```js
const server = window.parent.tcp.createServer()

server.on('connection', socket => {
  socket.on('data', data => {
    console.log(data)
  })

  socket.write("hello")
})

server.listen(9200)
```

### `server.listen(port[, cb])`

Start a server listening for connections.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| port | Object | | ![check](/images/icons/checkmark.svg) | The port on which to allow connections. |
| cb | Function | |  | If supplied, will be added as a listener for the `"connect"` event on the returned socket once. |

**&larr; Return** `undefined`


### `server.on(event, cb)`

Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times. See the Node.js [`EventEmitter`][ee] documentation for all methods and properties.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| name | String | | ![check](/images/icons/checkmark.svg) | The name of the event (continue reading this document for possible event names that can be observed). |
| cb | Function | | ![check](/images/icons/checkmark.svg) | The function to be called when there an event is emitted which matches the event name. |

**&larr; Return** `undefined`


### `server.close([cb])`

Stops the server from accepting new connections and keeps existing connections. This function is asynchronous, the server is finally closed when all connections are ended and the server emits a 'close' event. The optional callback will be called once the 'close' event occurs. Unlike that event, it will be called with an Error as its only argument if the server was not open when it was closed.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| cb | Function |  |  | If supplied, will be added as a listener for the `"connect"` event on the returned socket once. |

**&larr; Return** `undefined`

<br/>

## TCP Connect

### `tcp.createConnection(port[, address][, cb])`

Creates a new socket by immediately initiating a connection.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| port | Object |  | ![check](/images/icons/checkmark.svg) | The port to connect with. |
| address | String | |  | An `ipv4` or `ipv6` address. |
| cb | Function | |  | If supplied, will be added as a listener for the `"connect"` event on the returned socket once. |

**&larr; Return** `Client` (Instance of EventEmitter with the following events)

| Event | Description |
| :--- | :--- |
| `"listening"` | Emitted when the server has been bound after calling the `listen` method. |
| `"data"` | Emitted when data is received. The argument data will be a Buffer or String. Encoding of data is set by the `setEncoding` method. The data will be lost if there is no listener when a Socket emits a 'data' event. |
| `"closed"` | Emitted when the connection has fully closed. |

```js
const socket = window.parent.tcp.createConnection(9200, '192.168.1.22')

socket.on('connect', socket => {
  document.body.style.border = '1px solid green'
});

socket.on('data', data => {
  // data is of type string.
})
```

<br/>

### `client.on(event, cb)`

Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times. See the Node.js [`EventEmitter`][ee] documentation for all methods and properties.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| name | String | | ![check](/images/icons/checkmark.svg) | The name of the event (continue reading this document for possible event names that can be observed). |
| cb | Function | | ![check](/images/icons/checkmark.svg) | The function to be called when there an event is emitted which matches the event name. |

**&larr; Return** `undefined`


### `client.write([data[, encoding]][, cb])`

Sends data on the socket. The second parameter specifies the encoding in the case of a string. It defaults to UTF8 encoding.

Returns true if the entire data was flushed successfully to the kernel buffer. Returns false if all or part of the data was queued in user memory. 'drain' will be emitted when the buffer is again free.

The optional callback parameter will be executed when the data is finally written out, which may not be immediately.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| data | String | | | The data to send to the socket. |
| encoding | String | `utf8` | | Only used when data is string. May be either `utf8` or `Uint8Array` |
| cb | Function | |  | If supplied, will be added as a listener for the `"connect"` event on the returned socket once. |

**&larr; Return** `undefined`

### `client.end([data[, encoding]][, cb])`

Half-closes the socket. i.e., it sends a FIN packet. It is possible the server will still send some data.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| data | String | | | The data to send to the socket. |
| encoding | String | `utf8` | | Only used when data is string. May be either `utf8` or `Uint8Array`. |
| cb | Function | |  | If supplied, will be added as a listener for the `"connect"` event on the returned socket once. |

**&larr; Return** `undefined`

## UDP

### `udp.bind(...)`
Bind an listen on a port and address (or all interfaces)

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
|      |      |      |      |      |

**&larr; Return** `undefined`

```js
```

### `udp.send(...)`
Send a datagram to a port and address

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
|      |      |      |      |      |

**&larr; Return** `undefined`

```js
```

## Global Events

The following events are emitted on the `window` object, and can be listened to
with `window.addEventListener`.

### `"data"`

Emitted any time there is any data from the ipc channel, this
is a kind of firehose of data that can be helpful for debugging.

| Property | Type | Description |
| :--- | :--- | :--- |
| `e.detail.serverId` | String? | If the message was send by a server (uint64). |
| `e.detail.clientId` | String? | If the message was send by a client (uint64). |
| `e.detail.data` | Object? | Could be anything, in the case of a socket message, it will be a base64 encoded string. |

```js
window.addEventListener('data', e => {
  myMessageCount++
})
```

### `"blur"`
Raised on the `window` object when the window is backgrounded by the user.

```js
window.addEventListener('blur', e => {
})
```

### `"focus"`
Raised on the `window` object when the window is foregrounded by the user.

```js
window.addEventListener('focus', e => {
})
```

<br/>

### `"offline"`

Emitted when the network becomes unavailable.

```js
window.addEventListener('offline', e => {
})
```

### `"online"`

Emitted when the network becomes available.

```js
window.addEventListener('online', e => {
})
```

### `"protocol"`

Emitted when your app is opened because you registered a protocol in the app's
configuration file (ie `ios_procol: hyper`).

| Property | Type | Description |
| :--- | :--- | :--- |
| `e.detail.url` | String? | The url that opened the app. |

```js
window.addEventListener('protocol', e => {
  const u = new URL(e.detail.url)
  assert(u.protocol === 'ipfs:')
})
```

## File System

Operator Framwork File System API tries to mimic [Node.js File API](https://nodejs.org/api/fs.html#file-parent), though OP FS API may have some differences and or missing features.

### Class: `FileHandle`

A `FileHandle` object is an object wrapper for a numeric file descriptor. It tries to mimic Node.js' [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle).

### `FileHandle` event: `close`

The 'close' event is emitted when the `FileHandle` has been closed and can no longer be used.

### `fileHandle.close()`

Closes the file handle after waiting for any pending operation on the handle to complete.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |

**&larr; Return** `Promise<void>`

### `fileHandle.read([options])`

Reads data from the file and stores that in the given buffer.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| options | Object | `{}` | | An optional options object |
| options.buffer | Buffer | Buffer.alloc(16384) | | A buffer that will be filled with the file data read |
| options.offset | integer | 0 | | The location in the buffer at which to start filling |
| options.length | integer | buffer.byteLength - offset | | The number of bytes to read |
| options.position | integer | null | null | | The location where to begin reading data from the file. If null, data will be read from the current file position, and the position will be updated. If position is an integer, the current file position will remain unchanged |

**&larr; Return** `Promise<Object>`

| Property | Type | Description |
| :--- | :--- | :--- |
| bytesRead | integer | The number of bytes read |
| buffer | Buffer | A reference to the passed in `buffer` argument |

### `filehandle.stat([options])`

The `Stats` class is the same as described in Node.js [fs.Stats](https://nodejs.org/api/fs.html#class-fsstats)

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| options | Object | `{}` | | An optional options object |
| options.bigint | boolean | false | | Whether the numeric values in the returned stats object should be bigint |

**&larr; Return** `Promise<Stats>`

### `filehandle.write(buffer[, offset[, length[, position]]])`

Write buffer to the file.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| buffer | Buffer | | ![check](/images/icons/checkmark.svg) | |
| offset | integer | 0 | | The start position from within buffer where the data to write begins |
| length | integer | buffer.byteLength - offset | | The number of bytes to write |
| position | integer | null | null | | The offset from the beginning of the file where the data from buffer should be written. If position is not a number, the data will be written at the current position |

**&larr; Return** `Promise<Object>`

| Property | Type | Description |
| :--- | :--- | :--- |
| bytesWritten | integer | the number of bytes written |
| buffer | Buffer | A reference to the passed in `buffer` argument |

### `fsPromise.copyFile(src, dest[, mode])`

Asynchronously copies src to dest. By default, dest is overwritten if it already exists.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| src | string \| Buffer | | ![check](/images/icons/checkmark.svg) | source filename to copy |
| dest | string \| Buffer  | | ![check](/images/icons/checkmark.svg) | destination filename of the copy operation |
| mode | integer | 0 | | Optional modifiers that specify the behavior of the copy operation. It is possible to create a mask consisting of the bitwise OR of two or more values |
Modes:
- `fs.constants.COPYFILE_EXCL`: The copy operation will fail if dest already exists.
- `fs.constants.COPYFILE_FICLONE`: The copy operation will attempt to create a copy-on-write reflink. If the platform does not support copy-on-write, then a fallback copy mechanism is used.
- `fs.constants.COPYFILE_FICLONE_FORCE`: The copy operation will attempt to create a copy-on-write reflink. If the platform does not support copy-on-write, then the operation will fail.

**&larr; Return** `Promise<void>`

### `fsPromise.mkdir(path[, options])`

Asynchronously creates a directory.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| path | string \| Buffer | | ![check](/images/icons/checkmark.svg) | |
| options | Object | `{}` | | An optional options object |
| options.recursive | boolean| false | | ⚠️ Not implemented |
| options.mode | string | 0o777 | | ⚠️ Not implemented |

### `fsPromises.open(path, flags[, mode])`

Opens a `FileHandle`.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| path | Buffer | | ![check](/images/icons/checkmark.svg) | |
| flags | integer | 0 | | The start position from within buffer where the data to write begins |
| mode | integer | buffer.byteLength - offset | | The number of bytes to write. ⚠️ We don't use this one so far, so it won't affect anything |

**&larr; Return** `Promise<FileHandle>`

### `fsPromises.readdir(path[, options])`

Reads the contents of a directory.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| path | string \| Buffer \| FileHandle | | ![check](/images/icons/checkmark.svg) | filename or FileHandle |
| options | Object | `{}` | | An optional options object |
| options.encoding | string \| 'utf8' | null | | ⚠️ Not implemented |
| options.withFileTypes | boolean | falso | | ⚠️ Not implemented |

**&larr; Return** `Promise<String[]>`

### `fsPromises.readFile(path[, options])`

Asynchronously reads the entire contents of a file.

If no encoding is specified (using options.encoding), the data is returned as a `Buffer` object. Otherwise, the data will be a string.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| path | string \| Buffer \| FileHandle | | ![check](/images/icons/checkmark.svg) | filename or FileHandle |
| options | Object | `{}` | | An optional options object |
| options.encoding | string \| null | null | | |
| options.flag | string | | | |
| options.signal | AbortSignal | | | allows aborting an in-progress readFile ⚠️ Not implemented |

**&larr; Return** `Promise<string | Buffer>`

### `fsPromises.rename(path[, options])`

Renames oldPath to newPath.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| oldPath | string \| Buffer | | ![check](/images/icons/checkmark.svg) | |
| newPath | string \| Buffer | | ![check](/images/icons/checkmark.svg) | |

**&larr; Return** `Promise<void>`

### `fsPromises.rm(path[, options])`

Removes files and directories

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| path | string \| Buffer \| FileHandle | | ![check](/images/icons/checkmark.svg) | filename or FileHandle |
| options | Object | `{}` | | An optional options object ⚠️ Not implemented |

**&larr; Return** `Promise<void>`

### `fsPromises.rmdir(path[, options])`

Removes files and directories

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| path | string \| Buffer | | ![check](/images/icons/checkmark.svg) | |
| options | Object | `{}` | | An optional options object ⚠️ Not implemented |

**&larr; Return** `Promise<void>`

### `fsPromises.unlink(path[, options])`

Currently, this is an alias for `fsPromises.rm`

### `fsPromises.writeFile(file, data[, options])`

Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| file | string \| Buffer \| FileHandle | | ![check](/images/icons/checkmark.svg) | filename or FileHandle |
| data | string \| Buffer | | ![check](/images/icons/checkmark.svg) | |
| options | Object | `{}` | | An optional options object |
| options.encoding | string \| null | 'utf8' | | ⚠️ Not implemented |
| options.mode | string | 0o666 | | ⚠️ Not implemented |
| options.flag | string | 'w' | | ⚠️ Not implemented  |
| options.signal | AbortSignal | | | allows aborting an in-progress readFile ⚠️ Not implemented |

**&larr; Return** `Promise<string | Buffer>`

<br/>

[ee]:https://nodejs.org/api/events.html#class-eventemitter
[uv0]:http://docs.libuv.org/en/v1.x/tcp.html#c.uv_tcp_simultaneous_accepts
