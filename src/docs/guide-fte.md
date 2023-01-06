# Getting Started

## What is the Socket Runtime

Socket is a lightweight, portable runtime for building cross-platform apps
using standard web technology. That means, we build your HTML, CSS, and
JavaScript into an executable that can run on any OS, desktop or mobile.
While it's very competitive to similar projects, its primary goal is to be
the best batteries-inlcuded solution for web developers to create local-first
and peer-to-peer software. What is a [socket](https://en.wikipedia.org/wiki/Network_socket)?

## Install

<tonic-tabs selected="tab-mac" id="get-started">
  <tonic-tab id="tab-npm" for="panel-npm">npm</tonic-tab>
  <tonic-tab id="tab-mac" for="panel-mac">macOS</tonic-tab>
  <tonic-tab id="tab-linux" for="panel-linux">Linux</tonic-tab>
  <tonic-tab id="tab-win" for="panel-win">Windows</tonic-tab>
</tonic-tabs>

<tonic-tab-panel id="panel-npm">
  <code>
    npx @socketsupply/install
  </code>
</tonic-tab-panel>

<tonic-tab-panel id="panel-mac">
  <code>
    curl -s -o- https://sockets.sh/sh | bash -s
  </code>
</tonic-tab-panel>

<tonic-tab-panel id="panel-linux">
  <code>
    curl -s -o- https://sockets.sh/sh | bash -s
  </code>
</tonic-tab-panel>

<tonic-tab-panel id="panel-win">
  <code>
    iwr -useb https://sockets.sh/ps | iex
  </code>
</tonic-tab-panel>



## Anatomy of a Socket App

<div id="anatomy">
  <div class="isometric">
    <div data-id="os">
      <div class="os" data-id="android"><span>Android</span></div>
      <div class="os" data-id="ios"><span>iOS</span></div>
      <div class="os" data-id="win"><span>Windows</span></div>
      <div class="os" data-id="linux"><span>Linux</span></div>
      <div class="os" data-id="mac"><span>MacOS</span></div>
    </div>
    <div data-id="socket"><span>Socket Runtime</span></div>
    <div data-id="stack">
      <div data-id="js"><span>JS</span></div>
      <div data-id="css"><span>CSS</span></div>
      <div data-id="html"><span>HTML</span></div>
      <div data-id="subprocess"><span>Sub Process</span></div>
    </div>
    <div data-id="ui">
      Mobile or Desktop UI
      <span>Hello, World</span>
    </div>
  </div>
  <div class="content">
   <div data-content="subprocess">
     <label>Sub Process</label>
     <p>Some apps that do computationally intensive work and may want to move that logic into a sub process. That sub process will be piped to the render process, so it can be any language.</p>
   </div>
   <div data-content="ui">
     <label>User Interface</label>
     <p>This is what you see on your screen when you open an app either on your phone or your destkop.</p>
   </div>
   <div data-content="socket">
     <label>Socket Runtime</label>
     <p>The Socket CLI tool builds and packages and manages your application's assets. The runtime abstracts the operating systems details so you can focus on building your app.</p>
   </div>
   <div data-content="js">
     <label>JavaScript</label>
     <p>This is plain old JavaScript that is loaded by the HTML file. It may be bundled. It runs in a browser-like environment with all the standard browser APIs.</p>
   </div>
   <div data-content="css">
     <label>CSS</label>
     <p>This is plain old CSS that is loaded by the HTML file.</p>
   </div>
   <div data-content="html">
     <label>HTML</label>
     <p>This is plain old HTML that is loaded by the Socket Runtime.</p>
   </div>
 </div>
</div>

<tonic-tabs selected="tab-js-01" id="code-01">
  <tonic-tab id="tab-js-01" for="panel-js-01">JavaScript</tonic-tab>
  <tonic-tab id="tab-css-01" for="panel-css-01">CSS</tonic-tab>
  <tonic-tab id="tab-html-01" for="panel-html-01">HTML</tonic-tab>
  <tonic-tab id="tab-sp-01" for="panel-sp-01">Sub Process</tonic-tab>
</tonic-tabs>

<tonic-tab-panel id="panel-js-01">

```js
import io from '@socketsupply/io'

window.addEventListener('DOMContentLoaded', () => {
  io.backend.open() // spawn the "backend" process (if specified in the ini file).
})
```

</tonic-tab-panel>

<tonic-tab-panel id="panel-html-01">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <h1>Hello, World</h1>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

</tonic-tab-panel>

<tonic-tab-panel id="panel-css-01">

```css
h1 {
  text-transform: uppercase;
}
```

</tonic-tab-panel>

<tonic-tab-panel id="panel-sp-01">

```js
// This can be any program that can reads stdin and writes to stdout.
// Unlike Electron or other frameworks, this is completely optional.
// This is an example of using a javascript runtime as a sub process.

import { Message } from '@socketsupply/socket-api/ipc.js'
import pipe from '@socketsupply/node-pipe'

pipe.on('data', data => {
  pipe.write(data)
})

pipe.write(Message.from('setTitle', { value: 'hello' }))
```

</tonic-tab-panel>

## File Layout

```

```
