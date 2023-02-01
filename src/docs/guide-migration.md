# Migrating

## From Electron

### Electron

You usually split Electron code between the "main" and "render" process. Your
business logic code goes in the "main" process, and your user interface code
goes in the "render" process. For these two processes to communicate, you use
the `ipcMain` and `ipcRenderer` classes.

#### Render

```js
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI',{
  openFile: () => ipcRenderer.invoke('dialog:openFile')
})
```

```js
btn.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile()
  filePathElement.innerText = filePath
})
```

#### Main

```js
import { ipcMain } from 'electron'

ipcMain.handle('my-invokable-ipc', async (event, ...args) => {
  const result = await somePromise(...args)
  return result
})
```

### Socket

```js
import { ipc } from 'socket:ipc/node.js'

ipc.on('my-invokable-ipc', async (...args) => {
  ipc.emit('my-invokable-ipc', await somePromise(...args))
})
```

