# FAQ

### Why not electron?

Electron proved that desktop apps can be built with the web-stack. There is
also a demand for UIs that can fully integrate with the host environment.
VSCode is an explar for this.

But electron made some assumptions early on that are not aging well. Also,
build artifacts and memory footprint are much larger than they need to be,
especially for embedded systems where we need our apps to run.

### Why not Rust?

Webview is C++, so are the platforms (Cocoa, GTK, and Windows). Memory
safty offered by Rust isn't meaningful in this context.

### I need feature-X, but `ssc` doesn't support that, can you make it?

You can make a PR. But the goal is not to solve the all problems for all
use cases. The goal is to be minimal. Just the essentials. Stay fast and
stay simple. Electron or Tauri might have what you are looking for.

### What about keyboard accelerators?

All menus raise events in the front-end. So should keyboard accelerators.
Your accelerators, and menu items can all use `addEventListener` and then
send a message to the backend if needed.
