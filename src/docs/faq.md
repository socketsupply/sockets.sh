# FAQ

## Cross Platform Development

### What is a Modern Runtime for Web Apps?

*Modern* does not refer to how recently any component of the software was
written. For example, we use `libuv` which certainly isn't new. In fact, it's
considered boring and stable. It's the approach that's modern.

The `client-server` model was more relevant when computers were fewer and less
powerful. Now we are surrounded by billions of computers that can connect
directly to each other, so servers are becoming less relevant no matter how fast
they are.


### Why not Electron?

Electron's binary size and memory footprint are far from acceptable for most
developers. The bulk of the weight comes from the decision to build-in V8 and
a custom distribution of node.js.


### Why not Tauri, Rust?

Tauri is a project for people who want to write Rust. Socket SDK is for Web
Developers who want to create connected apps with HTML, CSS, and JavaScript.

Webview is C++, and so are the platforms that it runs on. The memory safety offered
by Rust is great but becomes irrelevant when it's just a thin wrapper around a
world of C++. It is possible to write C++ that is as safe as Rust, it's just a
hell of a lot harder.


### Does Webview render consistently across platforms?

Historically it did not. Now it does.


### Is it secure?

Yes. As much as anything else. Just *NEVER* try to build a browser. *NEVER*
evaluate arbitrary code. *ALWAYS* use a strong CSP. *ALWAYS* sanitize any
data that will be rendered in a UI.


### Will you support a specific feature?

Possibly, create a PR and make an argument for why the feature is relevant to
everyone who would use this project.


### How can Webview based apps compete with the quality of native apps?

Native apps require an enormous amount of developer effort if the developer
wants their app to run across multiple platforms. Socket lowers the
barrier to entry and lets in the world's largest developer community. With care, and
avoiding bloated frameworks, a web-based app can run as well as any native app.


## Peer To Peer

### Why should I care that P2P is free? AWS is almost free!

AWS is nearly free until you experience any kind of growth. The cost of The Cloud scales up
with the demand for a product. And for most companies, The Cloud becomes their largest cost center.
When this cost is combined with non-cloud costs (the cost of experts, their managers, key-person
churn, it can make profitability impossible.


### How effective are distributed networks at hosting the long tail of rarely-accessed content?

We make it possible to send a receive packets even when peers are offline. But this isn't the same
as "free storage". In networks like BitTorrent, rarely-accessed content (content accessed less
frequently than 72 hours) becomes unavailable as the few peers hosting that content drop offline.

In this case, we enable developers to build hybrid networks. In hybrid networks, developers can
choose to keep a centralized copy of all content. This keeps rarely-accessed content always available.
For popular content, a distributed swarm of users’ devices also assist in distribution, reducing the
cost of serving that content from a central location.


### How can a peer replace a server?

A peer should not be asked to handle the same kind of workloads as a server. If you develop an app
that monopolizes a user's device, they will be unhappy, regardless of what architecture you are using.
Peers should handle smaller work-loads in shorter bursts.

With Peer To Peer networks, growth increases availability and compute capacity. Despite how many peers
join your network, you should continue to design with the assumption that peers are unreliable and
infrequently online.
