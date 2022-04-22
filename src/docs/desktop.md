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

### `window.parent.setBackgroundColor(opts: Object)`
Set the color of the window background.

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `opts.red` | Number |  | `0` | A value between `0` and `255`. |
| `opts.green` | Number |  | `0` | A value between `0` and `255`. |
| `opts.blue` | Number |  | `0` | A value between `0` and `255`. |
| `opts.alpha` | Float |  | `1` | A value between `0` and `1` that determines the transparency of the title bar. |

**&larr; Return** `undefined`

```js
await window.parent.setBackgroundColor({ red: 255, green: 255, blue: 255, alpha: 1 })
```

### `window.parent.setMenu(opts: Object)`
Set the native menu for the app (see a more significant example later on in the docs).

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `opts.value` | String | ![check](/images/icons/checkmark.svg) | | A String that conains the menu config DSL. |
| `opts.index` | Number |  | `0` | Specifies the index of the window to set the menu on (Ignored on MacOS). |

**&larr; Return** `Promise<void>`

Operator Framework provides a minimalist DSL that makes it easy to create
cross platform native system and context menus.

Menus are created at run time. They can be created from either the Main or
Render process. The can be recreated instantly by calling the `setMenu` method.

The method takes a string. Here's an example of a menu. The semi colon is
significant indicates the end of the menu. Use an underscore when there is no
accelerator key. Modifiers are optional. For the edit menu, `op` will figure
out which accelerators to use for you.

```js
system.setMenu({ index: 0, value: `
  App:
    Foo: f;

  Edit:
    Cut: x
    Copy: c
    Paste: v
    Delete: _
    Select All: a;

  Other:
    Apple: _
    Another Test: T
    !Im Disabled: I
    Some Thing: S + Meta
    ---
    Bazz: s + Meta, Control, Alt;
`)
```

#### Separators

To create a separator, use three dashes `---`.

#### Accelerator Modifiers

Accelerator modifiers are used as visual indicators but don't have a
material impact as the actual key binding is done in the event listener.

A capital letter implies that the accelerator is modified by the `Shift` key.

Additional accelerators are `Meta`, `Control`, `Option`, each separated
by commas. If one is not applicable for a platform, it will just be ignored.

On MacOS `Meta` is the same as `Command`.

#### Disabled Items

If you want to disable a menu item just prefix the item with the `!` character.
This will cause the item to appear disabled when the system menu renders.

#### Submenus

We feel like nested menus are an anti-pattern. We don't use them. If you have a
strong argument for them and a very simple pull request that makes them work we
may consider them.

#### Event Handling

When a menu item is activated, it raises the `menuItemSelected` event in
the front end code, you can then communicate with your backend code if you
want from there.

For example, if the `Apple` item is selected from the `Other` menu...

```js
window.addEventListener('menuItemSelected', event => {
  assert(event.detail.parent === 'Other')
  assert(event.detail.title === 'Apple')
})
```

### `window.parent.send(opts: Object)`
Send an "plain old javascript" object to the backend process and await a promise.
This parameter should not contain cyclical values. The promise should expect to
receive a value from the main process.

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `opts.value` | String | ![check](/images/icons/checkmark.svg) | | A String that conains the menu config DSL. |

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

Dynamically build a context menu and await the user's selection.

```js
const value = await window.contextMenu({
  Download: 'D',
  Wizard: 'W',
  Share: 'S'
})
```

If the user presses `w` or clicks the `Wizard` menu item, the following
statement will evalute true.

```js
assert(value === { title: 'Wizard', parent: 'contextMenu', state: 0 })
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
