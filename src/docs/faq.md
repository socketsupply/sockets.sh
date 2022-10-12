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


### How can Webview based apps compete with the quality of native apps?

Native apps require an enormous amount of developer effort if the developer
wants their app to run across multiple platforms. Socket lowers the
barrier to entry and lets in the worlds largest developer community. With care,
avoiding bloated frameworks, a web-based app can run as well as any native app.


### Why should I care that P2P is free? AWS is almost free!

AWS is nearly free (until you have any kind of growth). But they still require your
credit card and a lot of personally identifiable information. P2P is the only free and
permissionless way to build networked software.


### How effective are distributed networks at hosting the long tail of rarely-accessed content?

In networks like BitTorrent, rarely-accessed content (content accessed less frequently than 72 hours)
becomes unavailable as the few peers hosting that content drop offline.

For this case, we enable developers to build hybrid networks. In hybrid networks, developers can
choose to keep a centralized copy of all content. This keeps rarely-accessed content always available.
For popular content, a distributed swarm of users’ devices also assist in distribution, reducing the
cost of serving that content from a central location.

