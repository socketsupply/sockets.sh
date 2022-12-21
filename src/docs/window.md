# window

## Methods

### `window.parent.openExternal(url)`
Opens a link in the user's default browser.

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `url` | String | ![check](/images/icons/checkmark.svg) | | The URL that will be opened by the user's default browser. |

**&larr; Return** `undefined`

```ts
window.parent.openExternal(url)
```

### `window.parent.getConfig()`
Fetches config defined in [`ssc.config`](/config) as a plain JSON object.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
|      |      |      |      |      |

**&larr; Return** [`SocketConfig`](/config)

```ts
const config = await window.parent.getConfig()
console.log(config.title)
console.log(config.version)
console.log(config.description)
```

### [`window.showOpenFilePicker()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker)
Shows a file picker that allows a user to select a file or multiple files and
returns an array of strings for the file(s).

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
|      |      |      |      |      |

**&larr; Return** `Promise<Array<String>>`

```js
await window.showOpenFilePicker()
```


### [`window.showSaveFilePicker()`](https://developer.mozilla.org/en-US/docs/Web/API/window/showSaveFilePicker)

Shows a file picker that allows a user to save a file. Either by selecting an
existing file, or entering a name for a new file.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
|      |      |      |      |      |


**&larr; Return** `Promise<void>`

```js
await window.showSaveFilePicker()
```

### [`window.showDirectoryPicker()`](https://developer.mozilla.org/en-US/docs/Web/API/window/showDirectoryPicker)

Shows a directory picker which allows the user to select a directory.

| Argument | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
|      |      |      |      |      |


**&larr; Return** `Promise<Array<String>>`

```js
await window.showDirectoryPicker()
```

## Events

### `"data"`

Emitted any time there is any data from the ipc channel, this
is a kind of firehose of data that can be helpful for debugging or building apis.

| Property | Type | Description |
| :--- | :--- | :--- |
| `e.detail.params.source` | String? | `bluetooth` \| `tcp` \| `udp`. |
| `e.detail.params.uuid` | String? | If the message was sent by bluetooth it will have the temporary uuid of the device. |
| `e.detail.params.name` | String? | If the message was sent by bluetooth it may have the name of the device. |
| `e.detail.params.serverId` | String? | If the message was sent by a server (cast to utf8 string from uint64). |
| `e.detail.params.clientId` | String? | If the message was sent by a client (cast to utf8 string from uint64). |
| `e.detail.headers` | String? | If the `data` field is of type `arraybuffer`, there may be an object of headers. |
| `e.detail.data` | Any? | Could be anything, in the case of binary data, it will be of type `arraybuffer`. |

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
configuration file (ie `protocol: hyper`).

| Property | Type | Description |
| :--- | :--- | :--- |
| `e.detail.url` | String? | The url that opened the app. |

```js
window.addEventListener('protocol', e => {
  const u = new URL(e.detail.url)
  assert(u.protocol === 'ipfs:')
})
```
