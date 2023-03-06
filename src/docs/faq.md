# FAQ

### What is Socket? Is it a framework or a tool? Is it a service?

Socket Supply Co. builds and maintains a free and open source Runtime that helps web developers build apps for any OS, desktop, and mobile. You can use plain old HTML, CSS, and JavaScript, as well as your favorite front-end libraries for example React, Svelte, and Vue.

A core feature of Socket Runtime is its p2p capabilities. Our runtime exposes primitives needed for building peer-to-peer and local-first applications, such as Bluetooth, UDP, and robust file system access. Our p2p component allows developers to create apps where users can communicate directly, without the Cloud, it doesn’t require any servers at all, and even works when people are offline.

There is a complementary application performance management product (APM), Network Operator, that can diagnose and remediate issues within the production apps you build.


### How is Socket different from other hybrid-native app tooling, such as Electron, Tauri, NativeScript, React Native, Ionic, etc?

Socket is the first and only runtime to be cross-platform across desktop and mobile. Write once, run anywhere (iOS, Android, Linux, Windows, MacOS, and more!). It’s built from scratch, 1000 lines of code, 1.5MB binary size and has a significantly small memory footprint compared to others. However, the most important core differentiation are JavaScript APIs that provide Bluetooth, UDP, and robust file system access. These make it possible to create an entirely new class of P2P and local-first apps. Apps where users can communicate directly, without the Cloud. Every other runtime is a means to an end, ours is intended to subvert Cloud infrastructure entirely ;)


### How can I trust what Socket is doing with my applications?

Socket is open-source. We would love for you to read all our code and see how we're doing things!

Feel free to contact us as well and we can walk you through it. 


### But you're also a business, so you have to have some private technologies that you charge for, to make money?

As stated above, Socket Supply Co. builds and maintains a free and open source Runtime that helps web developers build apps for any OS, desktop, and mobile, as well as a p2p library, that enables developers to create apps where users can communicate directly, without the Cloud. 

These will always be open-source and free to use by any developer, no matter what they use it for (commercial or personal). That will always be true.

Our Operator App has different tools which help in the entire lifecycle of building, deploying, and monitoring the Socket apps you build. Operator App has various pricing tiers which hackers, startups and enterprises can benefit from. (link to pricing grid)

### We already have teams of engineers that build our web and other native-platform app experiences. Why would we benefit from Socket?

App builders can prioritize what they want to solve when working with Socket. There are many benefits to choose from for a wide variety of reasons. 

Autonomy - Right now you’re entirely codependent on a 3rd party to run a mission-critical part of your business. The Cloud is a landlord-tenant relationship with costs that can prevent your business from becoming profitable. Socket helps you connect your users directly to each other, allowing you to rely less on the Cloud,and reclaim your sovereignty, and your profit margins.

Reducing complexity is an important metric for many engineering teams. Companies whose applications are built across desktop and mobile would be moving from working and maintaining >=3 code bases in their current state to 1 code base with Socket. This drastically reduces complexity within the organization and speeds up innovation. 

Decentralization is an important metric that can be solved by running p2p, Socket app builders can confidently claim that they are truly decentralized. 

Builders of network enabled Productivity and Collaboration tools will realize major benefits by building on Socket. Evan Wallace, Co-founder and good friend from Figma said it best “these days it’s obvious that multiplayer is the way all productivity tools on the web should work, not just design.”(link for appendix). Costs.

Cost reduction is a clear benefit of building on Socket. For smaller teams who don’t have native teams in place, they can get to their customers quicker by writing once, and running anywhere. Cloud bills are the #1 cost for many organizations, building on Socket reduces that to $0, or as much as you want to migrate off the cloud. We say crawl, walk, run. 


### Is this somehow related to Web3?

If we define “web 3” to mean a decentralized web, then yes. We don’t really take a position on anything else.

We provide a technical foundation that makes it possible for many Web3 ideals to come to fruition.

In its current state, Web3 is not decentralized. The ecosystem relies heavily on centralized cloud providers like AWS for infrastructure. This is an economic disadvantage and in most cases a barrier to entry. However, apps built with Socket’s P2P capabilities can be 100% decentralized, absolutely no servers are required. They can be fully autonomous, aligning directly with the mission of the web3 community. 


### Doesn't P2P (without centralized servers) mean that only users that are online at the same time can share and communicate with each other?

No! Socket drives a UDP multicast protocol that sends information from one user's device to a variety of other "peer" devices -- those with knowledge of each other at a networking level (IP address, port) -- and those peers will in turn **relay** this information onward to other peers.

A message sent from one device will thus *bounce around* the peer matrix of devices until it is able to reach the intended recipient, even if the sender and recipient are never online at the same time.


### Wait a minute, you're saying that if I send information to my friend or coworker, any other connected peer devices will see this message as they relay it on?

Yes and no. Peers *do* all relay packets for each other, to ensure that any peer *can* communicate with any other peer, even if they aren't directly connected or ever online with each other at the same time.

However, all data packets (those used for user data, not network coordination) are encrypted, such that only the intended recipient of the packets can decrypt and access the information therein.

So your message will reside in parts (packet by packet) on many other users' devices, at various times, but only in parts and only encrypted, meaning those other devices cannot make any sense of that data.

This encryption/decryption security uses industry-standard -- and audited! -- public key cryptography, similar to --- and at least as safe as! -- the HTTPS/TLS encryption that users across the web trust for communication with very sensitive sources, including banks, doctors, etc.


### How do I know that a message I receive (and decrypt) was not tampered with or faked by someone other than who the message claims to be from?

At the network packet level, packets are encrypted using the public key of the intended recipient. Only the recipient (holding the paired private key) could possibly decrypt the packet, which would be necessary for tampering.

Any man-in-the-middle tampering with an encrypted packet would render the final decrypted value as garbage. The app would be able to immediately tell that the expected data was garbled and thus discard it.

Corrupted (or manipulated) packets, or even dropped/missing packets, can be automatically *re-queried* across the peer network, to reacquire the necessary packets. As such, the encryption used guarantees that information received is either complete and in-tact, before decryption, or entirely dropped.

As for determining the identity authenticity of the sender, the network protocol does not employ overhead of digital signatures or verification, nor digital certificates.

Socket powered apps are allowed, and expected, to employ their own security layered on top of (tunneled through) the network encryption provided automatically. This may include additional encryption, digital signatures, digital certificates (identity verification), and more, according to the needs and capabilities of the app.

All of those app-specific techniques are still able to be leveraged and negotiated across the Socket-powered peer network.


### I am nervous about other people transmitting arbitrary information that may be on my device, because this information could open me up to liability (legal, etc). How am I protected if I allow my device to relay information for others I don't know or trust?

Your device never holds plain-text (or plainly accessible) data on behalf of any other user. The packets your device relays on behalf of others was encrypted for those intended recipients, and your device could never possibly decrypt or make sense of any of that data.

You thus have perfect deniability as your protection from those potential risks/liabilities.

This is analogous to internet infrastructure like switches/routers, which are peppered by the billions around the web. None of these devices can decrypt the HTTPS traffic transiting through them, and thus none of those devices ever have any liability for the kinds of information buried inside the encrypted data as it flows through.

Socket isn't introducing anything more dangerous here than has already existed for the last 25+ years of the internet.

More importantly, the relay of packets through your device only happens *in memory* (never on disk), and only while you have a Socket powered app open for use. If you close the app, or power-off / restart your device, that cache is wiped completely; the in-memory cache only gets filled back up with more packets when you open a Socket powered app while online.

As the device user, it's always your choice and in your control.


### Does this mean that other people can use my device for performing heavy computations (bitcoin mining, etc) without my consent?

No!

The P2P relaying of packets is merely a pass-thru of (encrypted) data. Your device performs almost no computation on these packets, other than to check the plaintext headers to figure out whether and how to relay it along.

Aside from this very simple and fast processing of these packets, your device will never perform any computation on behalf of any other person.

The *only* exception would be computation you had directly and expressly consented to via an app that you chose to install and open/use, *if* that app was designed in such a way to share computation work with others.

For example, "SETI@home" type apps intentionally distribute computation (image processing, etc) among a vast array of devices that have idle/unused computing power being *donated* to a good cause. Another plausible example: some apps are currently exploring distributing machine-learning (ML/AI) computations among an array of peers.

If you installed such an app, and opened it, your device would subject itself to app-level computation on behalf of others. But you remain in control of all those decisions, including closing such apps, uninstalling them, etc. And if you didn't install and open such an app, none of that distributed computation would ever happen on your device, regardless of how others use the P2P network.

**No unintended/background/abusive computation on your device is ever be possible** by virtue of the Socket P2P protocol itself. Only apps themselves can coordinate such distributed computation activities, and only with expressed installation consent from users.


### Aside from CPU computation, doesn't allow my device to participate in packet relay for many other peers subject my device to extra resource utilization (using up my memory, draining my battery more quickly, etc)?

The only resource utilization that occurs is that which you consent to by opening and using Socket powered apps.

Socket limits the memory used for the packet relay cache, currently to 16MB (not GB!). This is an extremely small slice of typical device memory, even budget-level smartphones (which typically have at least 1-2 GB of memory).

As for the battery, Socket does not perform unnecessary background work, so any battery usage you experience should be directly proportional to the active use of a Socket powered app.

Relaying packets is a very simple and resource-light type of task. In our testing, we haven't seen any noticeable increase in resource load on devices as a result of running a Socket powered app, compared to any other consumer apps users typically use.

As a matter of fact, Socket powered apps tend to use and transmit way less data than other commercial/consumer apps, so users can expect in general to see no worse -- and often much improved! -- resource utilization than for non-Socket powered apps.


### Does P2P packet relay mean that data transmission, such as me sending a text message or picture to a friend, will go much slower?

P2P packet relay, even across a broad network of many millions of devices, is surprisingly fast and efficient, compared to typical presumptions.

If the sender and receiver of a message are both online at the time of a message being sent and are at most a few hops away in terms of the packet relay protocol of Socket, this transmission should take no more than a couple of seconds, but probably orders of magnitude faster.

In fact, since this communication is much more direct than in typical infrastructure, where messages have to go all the way out to a cloud server, and then on to the recipient, it's quite likely that communications will be at least as fast, if not much faster, via P2P communications techniques (relay, etc) as described.


### If the recipient of my message is not online when I send it, how long will the packets *stay alive* in the P2P network before being dropped, if the recipient has not yet come online and received the packets?

There's a lot of *it depends* on this answer (including the size of the message -- how many packets -- and network activity/congestion).

But in general, messages may be able to survive for as long as a couple of weeks and almost never less than several days.

Apps are expected to design with the nature of the lack of delivery guarantees in P2P networks in focus. To help users compensate and adapt, these apps should provide appropriate user experience affordances, including "resend", "read receipt", and other such capabilities.


### I've heard that P2P often suffers from NAT traversal complications (hard NAT, etc), so how reliably will peers using Socket powered apps be able to connect to other peers, depending on what network infrastructure they're connected to at the time?

Socket's P2P protocol includes a collection of sophisticated and robust techniques for peer introduction, NAT type discovery, and communication negotiation.

NAT traversal and negotiation are automatically handled, so that app developers do not need to worry about these messy details. That said, all our code is open-source, so we invite you to take a deeper look if you're curious about how we handle these complicated tasks on your app's behalf.


### Bad actors are certainly going to try to flood the network with junk, to deny/degrade service (DoS attacks), attack peers (DDoS attacks), etc. How can this P2P network possibly survive such abuse?

The P2P packet relay protocol includes a sophisticated set of *balancing* techniques, which acts to ensure that no peer on the network places an outsized burden on other peers in the network.

Fluctuations and usage differences of course are a reality, but the protocol naturally resists the kinds of behaviors that bad actors rely on.

We've done a significant amount of modeling simulations and real-world field tests, and we're convinced that these types of attacks will ultimately prove impractical and not affect the ultimate trajectory and growth of our P2P network.


### Is this like BitTorrent, Tor, Napster, Gnutella etc?

The web's roots are P2P, and yes there have been a number of widely known (and sometimes infamous!) attempts to bring the web back to its P2P identity over the years; some good, some not so good. Most of these are focused on file sharing. We see a broader opportunity with P2P which is focused on connectivity, reduced infrastructure cost, and reduced complexity in general.

We think the time has come for the web to return to the P2P model by default, to dismantle the wasteful and unnecessarily complicated (and expensive!) centralization trend that has given rise to the age of the "cloud". There are more than enough consumer devices, many of them highly connected, to accomplish a de-centralization.

While these changes have profound effects on improving how developers and businesses build and deliver experiences to consumers, it's the revolution of a user-centric web that most excites us, frankly.

Users don't need all of their data sent up to the cloud, nor do they want that. Users want privacy by default. Users don't need or want to be tracked with every single click or keystroke. Users don't want to *wait*, staring at spinners, while entire applications full of tens of megabytes of images, fonts, and JS code re-download every single page load. Users don't want or need walled-garden app stores to single-handedly decide what apps they're allowed to access, or how they're allowed to communicate and collaborate using those apps. Users don't want experiences that only work if they have a perfect internet connection, and die or are unavailable when wifi gets spotty.

All of these are hallmarks of the web as it is today, and all of these are tricks designed to work in favor of big centralized companies that slurp up all our data and then charge us rent to hold it. All of these are user-hostile behaviors that for the most part users can't opt out of, but overwhelmingly don't actually want.

Socket is a foundational building block that we believe can help usher in a new age of the web, one that puts users first. One that blurs the lines between websites and apps, and puts all those amazing experiences right on user's devices for them to use instantly, no matter where they are or what kind of internet connection they have (or not!). One that defaults to a local-first (or even local-only!) model that ***protects users' information by default***.

We don't think putting developers in control, and moreover putting users in control, is a hype or a fad. We think it's exactly where the web has to go to survive, and we believe it's where everyone that builds for the web will shift to eventually. Those are admittedly pretty big aspirations and goals, but they're far from unrealistic or naive.

