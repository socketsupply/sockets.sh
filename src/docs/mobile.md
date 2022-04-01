# Mobile API

Mobile APIs can be found on a global object named `system`. Almost none of the desktop APIs apply to mobile because the environment is quite different. For example, there is no "main" process on mobile. Mobile APIs are namespaced using the objects `tcp`, `udp` and `utp`.

## TCP Server

### `tcp.createServer([options])`
Creates a new TCP server.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| options | Object | `{}` | | An optional options object |
| options.simultaneousAccepts | Boolean | true | | Enable / disable simultaneous asynchronous accept requests that are queued by the operating system when listening for new TCP connections. See [libuv][uv0] docs for more info. |

**&larr; Return** `Server` (Instance of EventEmitter with the following events)

| Event | Description |
| :--- | :--- |
| `"listening"` | Emitted when the server has been bound after calling the `listen` method. |
| `"connection"` | Emitted when a new connection is made. The callback provides a single value, `socket`, which is an instance of `Socket` as described in this document. |
| `"data"` | Emitted when data is received. The argument data will be a Buffer or String. Encoding of data is set by the `setEncoding` method. The data will be lost if there is no listener when a Socket emits a 'data' event. |
| `"closed"` | Emitted when the connection has fully closed. |

```js
const server = window.system.tcp.createServer()

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
const socket = window.system.tcp.createConnection(9200, '192.168.1.22')

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

**&larr; Return** `undefined`a

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

### `"network"`

Emitted when there is a change in the status of the network.

| Property | Type | Description |
| :--- | :--- | :--- |
| status | String | Possible values are`online` or `offline`. |
| message | String | A description of why the network status changed. |

```js
window.addEventListener('network', e => {
  if (e.detail.status === 'offline') myFunction()
})
```

<br/>

### `"data"`

Emitted any time there is any data from the ipc channel, this
is a kind of firehose of data that can be helpful for debugging.

| Property | Type | Description |
| :--- | :--- | :--- |
| serverId | String? | If the message was send by a server (uint64). |
| clientId | String? | If the message was send by a client (uint64). |
| data | Object? | Could be anything, in the case of a socket message, it will be a base64 encoded string. |

```js
window.addEventListener('data', e => {
  myMessageCount++
})
```

<br/>

[ee]:https://nodejs.org/api/events.html#class-eventemitter
[uv0]:http://docs.libuv.org/en/v1.x/tcp.html#c.uv_tcp_simultaneous_accepts
