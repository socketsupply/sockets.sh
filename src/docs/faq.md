# FAQ

## What is a Modern Runtime for Web Apps?

*Modern* does not refer to how recently any component of the software was
written. For example we use `libuv` which certainly isn't new. In fact, it's
considered boring and stable. It's the approach that's modern.

The `client-server` model was more relevant when computers were fewer and less
powerful. Now we are surrounded by billions of computers that can connect
directly to each other, so servers are becoming less relevant no mater how fast
they are.

## How can a peer replace a server?

A peer should not be asked to handle the same kind of work-loads as a server. If
you develop an app that monopolizes a user's device, they will be unhappy,
regardless of what architecture you are using. Peers should handle smaller
work-loads in shorter bursts.

With Peer To Peer networks, growth increases availability and compute capacity.
Despite how many peers join your network, you should continue to design with the
assumption that peers are unreliable and infrequently online.


## Why not Electron?

Electron's binary size and memory footprint are far from acceptable for most
developers. The bulk of the weight comes from the decision to build-in V8 and
a custom distribution of node.js.


## Why not Tauri?

Tauri is a project for people who want to write Rust. Socket SDK is for Web
Developers who want to create connected apps with HTML, CSS and JavaScript.


## Why not Rust?

Webview is C++, so are the platforms that it runs on. The memory safety offered
by Rust is great but becomes irrelevant when it's just a thin wrapper around a
world of C++. It is possible to write C++ that is as safe as Rust, it's just a
hell of a lot harder.


## Does Webview render consistently across platforms?

Historically it did not. Now it does.


## Is it secure?

Yes. As much as anything else. Just *NEVER* try to build a browser. *NEVER*
evaluate arbitrary code. *ALWAYS* use a strong CSP. *ALWAYS* sanitize any
data that will be rendered in a UI.


## Will you support a specific feature?

Possibly, create a PR and make an argument for why the feature is relevant to
everyone who would use this project.
