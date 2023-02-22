# Peer To Peer

## Why

There are broadly 3 categories of concerns addressed by P2P.

### Complexity

One server to many users is a natural bottle-neck, and scaling them up quickly
becomes a complex distribued system of shared state. A P2P network is many users
to many users, and although it is also an eventually consistent, distribued
system of shared state, the total complexity of all components needed to create
a P2P network are finite, transparent and can be formally verified.


### Security & Sovereignty

Cloud (even Gov. Cloud) are closed systems, owned by third parties. There is
always a non-zero chance for a greater number of incidents than if the network,
data, and software was entirely self-contained without a man-in-the-middle.


### Cost

Servers, and cloud infrastructure in general, become more expensive as demand
increases. Although "free tiers" can be cheap for trivial, they can be prohibitive
for many kinds of businesses.


## Use Cases

The protocol is limited to connecting peers and delivering datagrams with a high
degree of reliably. It sits directly on top of UDP and is suitable for building
applications and protocols. Uses case examples include chat, social networks, mail,
photo and file sharing, distribued computing.


## How

<p class="hl">The dependency for this api will be published 02.01.2023</p>

```js
import { Peer } from 'socket:peer'

const peer = new Peer({ publicKey, privateKey })

peer.onPacket = (packet, port, address) => {
  console.log(packet)
}

peer.init()

peer.publish({
  clusterId: 'greetings',
  message: 'hello, world'
})
```

TODO link to the API docs and explain this code more.


### NAT Traversal

#### Problem Description

With client-server architecture, any client can directly request a response from
a server. However in peer-to-peer architecture, any client can not request a
response from any other client.

P2P software needs to listen for new messages from unknown people. However most
routers will discard unsolicited packets. It is possible to work around this
problem.

P2P connectivity requires coordination between three or more peers. Consider the
following analogy.

Alice wants to write a letter to Bob. But Bob moves frequently, and she has no
other way to contact him. Before Alice can send Bob the letter, she needs to
learn his address. The solution is for her to ask some friends who might have
talked to Bob recently.

In this anology, Alice's letter is really a packet of data. Bob's address is his
external `IP address` and `port`. And their friends, are a serializable list of
recently known IP addresses and ports. You can read more about the technical
details in the `STATE_0` section of the [spec][G1].


### Small Networks

#### Problem Description

Imagine a scenario where Alice and Bob are sending each other messages. Alice
goes offline. Bob continues to write messages to Alice. And because the App Bob
is using has a good "local first" user experience, it appears to Bob as if
everything is fine and that Alice should eventually receive all his messages,
so he also goes offline. When Alice comes online, she doesn’t see Bob’s most
recent messages because he’s not online to share them.

#### Problem Summary & Solution Deficits

This is a very common problem with P2P, it’s sometimes called the Small Network
Problem. How well data can survive in a network with this problem is referred to
as "partition tolerance". This problem is often solved by using
[STUN and TURN][1] (relay servers), but these add additional infrastructure that
comes at a cost (both in terms of time, money, and expertise).

#### Solution

The way Stream Relay Protocol solves this problem is with a shared, global
packet caching strategy. Every peer in the entire network allocates a small
budget (16Mb by default) for caching packets from any other peer in the network.

A peer will cache random packets with a preference for packets that have a topic
ID that the peer subscribes to. A packet starts out with a postage value of 16
(A peer will never accept a packet with a postage value greater than 16). When a
packet nears its max-age, it is re-broadcast to 3 more random peers in the
network, each taxing its postage by a value of 1 when received, unless its
postage value is 0, in which case it is no longer re-broadcast and is purged
from the peer’s cache.

When a message is published, it is also re-broadcast by at least 3 random peers,
with a preference for the intended recipient and peers that subscribe to the
same topic. The result of this is a high `r-value` (or `r0`, also known as Basic
Reproduction Ratio in epidemiology).

#### Solution Summary & Solution Gains

In [simulations][2], a network of `128 peers`, where the join and drop rate are
`>95%`, `+/-30%` of NATs are hard, and only `+/-50%` of the peers subscribe to
the topic ID; an unsolicited packet can replicate to `100%` of the subscribers
in an average of `2.5 seconds`, degrading to only `50%` after a 1000% churn
(unrealistically hostile network conditions) over a `>1 minute` period.

This strategy also improves as the number of participants in the network
increases, since the size of the cache and time packets need to live in it is
reduced. If we revisit our original problem with this strategy, we can
demonstrate a high degree of partition tolerance. It can be said that the peers
in a network act as relays (hence the name of the protocol).

Bob continues to write (optionally encrypted) messages to Alice after she goes
offline, and his packets are published to the network. A network of only 1024
peers (split across multiple apps), will provide Bob’s packets a 100% survival
rate over a 24 hour period, without burdening any particular peer with storage
or compute requirements. Allowing Alice to return to the network and see Bob’s
most recent messages without the need for additional infrastructure.


### Cache Negotiation

TODO


### Connectionless

TCP is oftern thought of as an ideal choice for packet delivery since it's
considered "reliable". With TCP packet loss, all packets are withheld until all
packets are received, this can be a delay of up to 1s (as per RFC6298 section
2.4). If the packet can't be retransmitted, an exponential backoff could lead to
another 600ms of delay needed for retransmission.

In fact, `Head-of-Line Blocking` is generally a problem with any ordered stream,
TCP (or UDP with additional higher level protocol code for solving this problem).

TCP introduces other unwanted complexity that makes it less ideal for P2P.

UDP is only considered "unreliable" in the way that packets are not guaranteed
to be delivered. However, UDP is ideal for P2P networks because it’s message
oriented and connectionless (ideal for NAT traversal). Also because of its
message oriented nature, it’s light weight in terms of resource allocation. It's
the responsibility of a higher level protocol to implement a strategy for
ensuring UDP packets are delivered.

Stream Relay Protocol eliminates Head-of-Line blocking entirely by reframing
packets as content-addressable Doubly-Linked lists, allowing packets to be
delivered out of order and become eventually consistent. Causal ordering is made
possible by traversing the previous ID or next ID to determine if there were
packets that came before or after one that is known.

And in the case where there is loss (or simply missing data), the receiver MAY
decide to request the packet. If the peer becomes unavailable, query the network
for the missing packet.

The trade-off is more data is required to re-frame the packet. The average
[MTU][W2] for a UDP packet is ~1500 bytes. Stream Relay Protocol uses ~134 bytes
for framing, allocating `1024` bytes of application or protocol data, which is
[more than enough][E0].

### Further Reading

See the [specification][G1] and the [source code][G2] for more details.


[W0]:https://en.wikipedia.org/wiki/Doubly_linked_list
[W1]:https://en.wikipedia.org/wiki/Universally_unique_identifier
[W2]:https://en.wikipedia.org/wiki/Maximum_transmission_unit
[E0]:https://gafferongames.com/post/snapshot_compression/
[1]:https://datatracker.ietf.org/doc/html/rfc5766
[2]:/test/cases/ratio.js
[3]:/spec/README.md#state_0-initial

[G1]:https://github.com/socketsupply/stream-relay/spec/README.md
[G2]:https://github.com/socketsupply/stream-relay/src

[R0]:https://lamport.azurewebsites.net/tla/proving-safety.pdf
[R1]:https://lamport.azurewebsites.net/pubs/liveness.pdf
[R2]:https://pdos.csail.mit.edu/papers/p2pnat.pdf
[R3]:https://www.microsoft.com/en-us/research/uploads/prod/2018/05/book-02-08-08.pdf

[W0]:https://en.wikipedia.org/wiki/UDP_hole_punching
[W1]:https://en.wikipedia.org/wiki/Transport_layer
[W2]:https://en.wikipedia.org/wiki/Rendezvous_protocol
[W3]:https://en.wikipedia.org/wiki/STUN

[T0]:https://tailscale.com/blog/how-nat-traversal-works
[F0]:https://fossbytes.com/connection-oriented-vs-connection-less-connection/

[B1]:https://www.bittorrent.org/beps/bep_0055.html
[C0]:https://github.com/clostra/libutp
[GH01]:https://github.com/libpcp/pcp
[GH02]:https://github.com/paullouisageneau/libplum

[rfc3022]:https://datatracker.ietf.org/doc/html/rfc3022
[rfc2663]:https://datatracker.ietf.org/doc/html/rfc2663
[rfc6886]:https://datatracker.ietf.org/doc/html/rfc6886
[rfc6887]:https://datatracker.ietf.org/doc/html/rfc6887
[rfc791]:https://datatracker.ietf.org/doc/html/rfc791
[rfc1122]:https://datatracker.ietf.org/doc/html/rfc1122
[rfc2460]:https://datatracker.ietf.org/doc/html/rfc2460
