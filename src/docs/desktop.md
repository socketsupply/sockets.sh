When your program runs, it will forward its arguments to the Main process.
The main process is responsible for showing a window to the user.

## Methods


### [`window.resizeTo(width, height)`](https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo)
A method that dynamically resizes the window.

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `height` | Number | ![check](/images/icons/checkmark.svg) |         | An integer representing the height of the window. |
| `width`  | Number | ![check](/images/icons/checkmark.svg) |         | An integer representing the width of the window. |

**&larr; Return** `undefined`

```js
function quarter() {
  window.resizeTo(
    window.screen.availWidth / 2,
    window.screen.availHeight / 2
  )
}
```


### [`window.showOpenFilePicker()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker)
Shows a file picker that allows a user to select a file or multiple files and
returns an array of strings for the file(s).

**&larr; Return** `Promise<Array<String>>`


```js
await window.showOpenFilePicker()
```


### [`window.showSaveFilePicker()`](https://developer.mozilla.org/en-US/docs/Web/API/window/showSaveFilePicker)

Shows a file picker that allows a user to save a file. Either by selecting an
existing file, or entering a name for a new file.

**&larr; Return** `Promise<void>`

```js
await window.showSaveFilePicker()
```

### [`window.showDirectoryPicker()`](https://developer.mozilla.org/en-US/docs/Web/API/window/showDirectoryPicker)

Shows a directory picker which allows the user to select a directory.

**&larr; Return** `Promise<Array<String>>`

```js
await window.showDirectoryPicker()
```


### `window.parent.hide(index)`

Hides the entire app and all of its windows (unless a window `index` is specified).

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `index` | Number |  | `0` | Specifies the index of the window to hide. |

**&larr; Return** `Promise<void>`

```js
await window.hide()
```


### `window.parent.show(index)`
Shows the entire app and all of its windows (unless a window `index` is specified).

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `index` | Number |  | `0` | Specifies the index of the window to show. |

**&larr; Return** `Promise<void>`

```js
await window.parent.show(0)
```

### `window.parent.setMenu(Options: Object)`
Set the native menu for the app (see a more significant example later on in the docs).

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `options.value` | String | ![check](/images/icons/checkmark.svg) | | A String that conains the menu config DSL. |
| `options.index` | Number |  | `0` | Specifies the index of the window to set the menu on (Ignored on MacOS). |

**&larr; Return** `Promise<void>`

```js
await window.parent.setMenu(`
  File:
    Open: Control + o
    Save: Control + s
  ;

  Window:
    Close: Control + q
  ;
`)
```

### `window.parent.send(Options: Object)`
Send an "plain old javascript" object to the backend process and await a promise.
This parameter should not contain cyclical values.

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `options.value` | String | ![check](/images/icons/checkmark.svg) | | A String that conains the menu config DSL. |

**&larr; Return** `Promise<Any>`

```js
await window.parent.send({ greeting: 'hello' })
```

### `window.parent.exit(code)`
Quits the backend process and then quits the render process,
the exit code used is the final exit code to the OS.

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `code` | Number |  | `0` | Specifies the exit code to be forwarded to the `Binding` process as it exits. |

**&larr; Return** `undefined`

```js
window.exit(0)
```

### `window.parent.openExternal(url)`
Opens a link in the user's default browser.

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `url` | String | ![check](/images/icons/checkmark.svg) | | The URL that will be opened by the user's default browser. |

**&larr; Return** `undefined`

```ts
window.parent.openExternal(url)
```

### `window.parent.contextMenu(opts)`
Opens a native context menu.

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `opts` | Object | ![check](/images/icons/checkmark.svg) | | Menu items. |

```js
await window.parent.contextMenu({
  'Copy': 'c',
  'Paste': 'v'
})
```

## Events
The following events are emitted on the `window` object.

| Event | Description |
| :--- | :--- |
| `"blur"` | Raised on the `window` object when the window is backgrounded by the user. |
| `"focus"` | Raised on the `window` object when the window is foregrounded by the user. |
| `"menuItemSelected"` | Raised when a menu item is activated (clicked). |
| `"data"` | A firehose event that represents any data received from the `Binding` process. |

## Properties
The following properties have either been added or modified.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `window.document.title` | String | Sets the title of the window (getter, setter). |
| `window.parent.platform` | String | Gets a string that describes the operating system (`android`, `ios`, `linux`, `mac`, or `win`). |
| `window.parent.argv`| Array<String> | Provides the arguments that the program was called with. |
| `window.parent.title` | String | The title as defined in the `operator.config` file. |
| `window.parent.version` | String | The version as defined in the `operator.config` file. |
| `window.parent.debug` | Number | Value is `1` unless `-xd` is passed to the CLI tool at build time. |
| `process.bundle` | String | A value returned by the OS that represents the path to the running app. |
| `process.executable` | String |The executable name as defined in the `operator.config` file. |
