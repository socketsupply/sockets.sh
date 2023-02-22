# FAQ

#### What is Socket? Is it a framework or a tool? Is it a service?

Socket Supply Co. provides a range of tools and software utilities to help developers build powerful application experiences using standard web technologies (HTML, CSS, and JS). These applications are compiled by Socket's tools into hybrid-native applications -- meaning a combination of web code running in a platform's "WebView" (embedded browser) along with platform-native code: Java on Android, Swift/Objective-C on iOS, C++ on Windows or Linux, etc.

These compiled applications can be distributed through major application stores, such as Google Play (Android, ChromeOS), App Store (iOS, MacOS), and Microsoft Store (Windows). These apps can thus be distributed and run on all major consumer computing platforms: Windows, MacOS, Linux, iOS, and Android.
	
#### How can I trust what Socket is doing with my applications?

Socket is open-source. We would love for you to read all our code and see how we're doing things!
	
#### But you're also a business, so you have to have some private technologies that you charge for, to make money?

Socket's core capabilities are open-source, and free to use by any developer, no matter what they use it for (commercial or personal). That will always be true.

In addition, we are developing a very powerful suite of applications for analysis, monitoring, and other important robustness/productivity operations. We will be selling licenses and access to these professional tools and services.

No Socket powered app is ever required to use any of these paid services.

More importantly, Socket will ***never charge*** for any of its tools or services on a *consumption* basis -- meaning that you pay us more depending on how many users/customers you have, or how much data is transmitted.

Unlike cloud providers, which tend to *hook you* with great introductory price offerings, and then gouge you more and more as you grow, every tool or service you pay for from Socket will always be disclosed upfront, and will grow as your needs grow, not as your success grows.
	
#### How is Socket different from other hybrid-native app tooling, such as Electron, Tauri, NativeScript, React Native, Ionic, etc?

Most importantly, Socket targets **all major consumer computing platforms**, both desktop and mobile. Most other options have important caveats that limit your deployment capabilities. Tauri can target both desktop and mobile platforms, but it's oriented heavily around Rust.
	
Socket targets all the platforms while not asking you to learn Rust, and it does so without any significant increase in the distributed size of the application. At current, Socket's application shell is a mere 1.5MB, compared to other tools like Electron adding as much as 250MB. Drastically smaller package sizes mean Socket powered apps can reach far more customer device types, and customers in far wider geographic and connectivity-challenged environments.

Additionally, Socket's tools and software utilities extend the capabilities of the app's web code with powerful device-access functionality rarely or never available to typical web applications. Example of these extensions include full, unrestricted file-system access, full UDP-based networking, Bluetooth communications, NFC, and more.
	
#### We already have teams of engineers that build our web and other native-platform app experiences. Why would we benefit from Socket?
	
Built on top of full UDP networking capabilities, Socket-powered apps can easily tap into P2P (peer-to-peer) capabilities: connecting to and communicating with other devices (local or remote) running the same apps, without the need for coordinating and relaying such communications through centralized servers (e.g., "the cloud").

By utilizing these powerful P2P/multiplayer techniques, businesses can drastically reduce development and infrastructure costs of their web and application experiences, while increasing user satisfaction through improved reliability, availability, and performance of these apps and services.

Development costs are primarily reduced by consolidating engineering efforts around one technology stack (the web). If businesses don't already have dedicated employee expertise in the various native platforms, Socket provides workflows for build and store-deployment in as little as one click. This lets businesses extend their presence to a much wider audience with virtually no additional effort or personnel overhead.

And businesses that *do* already have such employee expertise on staff, can still benefit from those engineers focusing on fine-tuning and/or extending the native application packages that Socket produces.

Infrastructure costs associated with "cloud" services (AWS, Azure, GCP) can also be significantly scaled back, instead leveraging the collective computing (storage and computation) capabilities of the millions of devices their customers use.
	
#### Doesn't P2P (without centralized servers) mean that only users that are online at the same time can share and communicate with each other?

No! Socket drives a UDP multicast protocol that sends information from one user's device to a variety of other "peer" devices -- those with knowledge of each other at a networking level (IP address, port) -- and those peers will in turn **relay** this information onward to other peers.

A message sent from one device will thus *bounce around* the peer matrix of devices until it is able to reach the intended recipient, even if the sender and recipient are never online at the same time.
	
#### Wait a minute, you're saying that if I send information to my friend or coworker, any other connected peer devices will see this message as they relay it on?

Yes and no. Peers *do* all relay packets for each other, to ensure that any peer *can* communicate with any other peer, even if they aren't directly connected or ever online with each other at the same time.

However, all data packets (those used for user data, not network coordination) are encrypted, such that only the intended recipient of the packets can decrypt and access the information therein.

So your message will reside in parts (packet by packet) on many other users devices, at various times, but only in parts and only encrypted, meaning those other devices cannot make any sense of that data.

This encryption/decryption security uses industry-standard -- and audited! -- public key cryptography, similar to --- and at least as safe as! -- the HTTPS/TLS encryption that users across the web trust for communication with very sensitive sources, including banks, doctors, etc.
	
#### How do I know that a message I receive (and decrypt) was not tampered with or faked by someone other than who the message claims to be from?

At the network packet level, packets are encrypted using the public key of the intended recipient. Only the recipient (holding the paired private key) could possibly decrypt the packet, which would be necessary for tampering.

Any man-in-the-middle tampering with an encrypted packet would render the final decrypted value as garbage. The app would be able to immediately tell that the expected data was garbled and thus discard it.

Corrupted (or manipulated) packets, or even dropped/missing packets, can be automatically *re-queried* across the peer network, to reacquire the necessary packets. As such, the encryption used guarantees that information received is either complete and in-tact, before decryption, or entirely dropped.

As for determining the identity authenticity of the sender, the network protocol does not employ overhead of digital signatures or verification, nor digital certificates.

Socket powered apps are allowed, and expected, to employ their own security layered on top of (tunneled through) the network encryption provided automatically. This may included additional encryption, digital signatures, digital certificates (identity verification), and more, according to the needs and capabilities of the app.

All of those app-specific techniques are still able to be leveraged and negotiated across the Socket-powered peer network.
		
#### I am nervous about other people transmitting arbitrary information that may be on my device, because this information could open me up to liability (legal, etc). How am I protected if I allow my device to relay information for others I don't know or trust?

Your device never holds plain-text (or plainly accessible) data on behalf of any other user. The packets your device relays on behalf of others was encrypted for those intended recipients, and your device could never possibly decrypt or make sense of any of that data.

You thus have perfect deniability as your protection from those potential risks/liabilities.

This is analogous to internet infrastructure like switches/routers, which are peppered by the billions around the web. None of these devices can decrypt the HTTPS traffic transiting through them, and thus none of those devices ever have any liability for the kinds of information buried inside the encrypted data as it flows through.

Socket isn't introducing anything more dangerous here than has already existed for the last 25+ years of the internet.

More importantly, the relay of packets through your device only happens *in memory* (never on disk), and only while you have a Socket powered app open for use. If you close the app, or power-off / restart your device, that cache is wiped completely; the in-memory cache only gets filled back up with more packets when you open a Socket powered app while online.

As the device user, it's always your choice and in your control.
	
#### Does this mean that other people can use my device for performing heavy computations (bitcoin mining, etc) without my consent?

No!

The P2P relaying of packets is merely a pass-thru of (encrypted) data. Your device performs almost no computation on these packets, other than to check the plaintext headers to figure out whether and how to relay it along.

Aside from this very simple and fast processing of these packets, your device will never perform any computation on behalf of any other person.

The *only* exception would be computation you had directly and expressly consented to via an app that you chose to install and open/use, *if* that app was designed in such a way to share computation work with others.

For example, "SETI@home" type apps intentionally distribute computation (image processing, etc) among a vast array of devices that have idle/unused computing power being *donated* to a good cause. Another plausible example: some apps are currently exploring distributing machine-learning (ML/AI) computations among an array of peers.

If you installed such an app, and opened it, your device would subject itself to app-level computation on behalf of others. But you remain in control of all those decisions, including closing such apps, uninstalling them, etc. And if you didn't install and open such an app, none of that distributed computation would ever happen on your device, regardless of how others use the P2P network.

**No unintended/background/abusive computation on your device is ever be possible** by virtue of the Socket P2P protocol itself. Only apps themselves can coordinate such distributed computation activities, and only with expressed installation consent from users.
	
#### Aside from CPU computation, doesn't allowing my device to participate in packet relay for many other peers subject my device to extra resource utilization (using up my memory, draining my battery more quickly, etc)?

The only resource utilization that occurs is that which you consent to by opening and using Socket powered apps.

Socket limits the memory used for the packet relay cache, currently to 16MB (not GB!). This is an extremely small slice of typical device memory, even budget-level smart phones (which typically have at least 1-2 GB of memory).

As for battery, Socket does not perform unnecessary background work, so any battery usage you experience should be directly proportional to the active use of a Socket powered app.

Relaying packets is a very simple and resource-light type of task. In our testing, we haven't seen any noticeable increase in resource load on devices as a result of running a Socket powered app, compared to any other consumer apps users typically use.

As a matter of fact, Socket powered apps tend to use and transmit way less data than other commercial/consumer apps, so users can expect in general to see no worse -- and often much improved! -- resource utilization than for non-Socket powered apps.
	
#### Does P2P packet relay mean that data transmission, such as me sending a text message or picture to a friend, will go much slower?

P2P packet relay, even across a broad network of many millions of devices, is surprisingly fast and efficient, compared to typical presumptions.

If the sender and receiver of a message are both online at time of a message being sent, and are at most a few hops away in terms of the packet relay protocol of Socket, this transmission should take no more than a couple of seconds, but probably orders of magnitude faster.

In fact, since this communication is much more direct than in typical infrastructure, where messages have to go all the way out to a cloud server, and then on to the recipient, it's quite likely that communications will be at least as fast, if not much faster, via P2P communications techniques (relay, etc) as described.
	
#### If the recipient of my message is not online when I send it, how long will the packets *stay alive* in the P2P network before being dropped, if the recipient has not yet come online and received the packets?

There's a lot of *it depends* in this answer (including size of the message -- how many packets -- and network activity/congestion).

But in general, messages may be able to survive for as long as a couple of weeks, and almost never less than several days.

Apps are expected to design with the nature of lack of delivery guarantees in P2P networks in focus. To help users compensate and adapt, these apps should provide appropriate user experience affordances, including "resend", "read receipt", and other such capabilities.

#### I've heard that P2P often suffers from NAT traversal complications (hard NAT, etc), so how reliably will peers using Socket powered apps be able to connect to other peers, depending on what network infrastructure they're connected to at the time?

Socket's P2P protocol includes a collection of sophisticated and robust techniques for peer introduction, NAT type discovery, and communication negotiation.

NAT traversal and negotiation is automatically handled, so that app developers do not need to worry about these messy details. That said, all our code is open-source, so we invite you to take a deeper look if you're curious how we handle these complicated tasks on your app's behalf.
	
#### Bad actors are certainly going to try to flood the network with junk, to deny/degrade service (DoS attacks), attack peers (DDoS attacks), etc. How can this P2P network possibly survive such abuse?

The P2P packet relay protocol includes a sophisticated set of *balancing* techniques, which acts to ensure that no peer on the network places an outsized burden on other peers in the network.

Fluctuations and usage differences of course are a reality, but the protocol naturally resists the kinds of behaviors that bad actors rely on.

We've done a significant amount of modeling simulations and real-world field tests, and we're convinced that these types of attacks will ultimately prove impractical and not affect the ultimate trajectory and growth of our P2P network.

#### Isn't this just another kind of Tor / Napster / other hyped P2P fad that will come and go, and not really be reliable for businesses to build on?

Obviously, we don't think so!

But in all seriousness, the web's roots are P2P, and yes there have been a number of widely known (and sometimes infamous!) attempts to bring the web back to its P2P identity over the years; some good, some not so good. The fact that we keep seeing attempts to re-approach, and rethink, P2P and its relationship to the web, is indeed a very strong positive signal that what we're advancing with Socket is not just some niche hobby idea, but a truly powerful and transformative evolutionary step *the web wants to take*.

We think the time has come for the web to return to the P2P model by default, to dismantle the wasteful and unnecessarily complicated (and expensive!) centralization trend that has given rise to the age of the "cloud". There are more than enough consumer devices, many of them highly connected, to accomplish a de-centralization.

While these changes have profound effects on improving how developers and businesses build and deliver experiences to consumers, it's the revolution of a user-centric web that most excites us, frankly.

Users don't need all of their data sent up to the cloud, nor do they want that. Users want privacy by default. Users don't need or want to be tracked with every single click or keystroke. Users don't want to *wait*, staring at spinners, while entire applications full of tens of megabytes of images, fonts, and JS code re-download every single page load. Users don't want or need walled-garden app stores to single-handedly decide what apps they're allowed to access, or how they're allowed to communicate and collaborate using those apps. Users don't want experiences that only work if they have a perfect internet connection, and die or are unavailable when wifi gets spotty.

All of these are hallmarks of the web as it is today, and all of these are tricks designed to work in favor of big centralized companies that slurp up all our data and then charge us rent to hold it. All of these are user-hostile behaviors that for the most part users can't opt out of, but overwhelmingly don't actually want.

Socket is a foundational building block that we believe can help usher in a new age of the web, one that puts users first. One that blurs the lines between websites and apps, and puts all those amazing experiences right on user's devices for them to use instantly, no matter where they are or what kind of internet connection they have (or not!). One that defaults to a local-first (or even local-only!) model that ***protects users' information by default***.

We don't think putting developers in control, and moreover putting users in control, is a hype or a fad. We think it's exactly where the web has to go to survive, and we believe it's where everyone that builds for the web will shift to eventually. Those are admittedly pretty big aspirations and goals, but they're far from unrealistic or naive.

#### OK, to be honest, this is starting to sound rather outlandish and idealistic, like the Web3/crypto zealotry that often preaches of decentralization. Is Socket just another take on Web3?

We don't believe there's anything inherently wrong or broken about Web3 at its core. But like most, it's clear to us that there's a lot of... ahem... *noise* to sift through. We have a long way to go before the bad stuff is sifted out and the good stuff has risen to the top. 

Socket is not a Web3 technology per se. But in building ourselves on the goals of decentralized P2P, it's fair to say we're "Web3 friendly". You might think of the P2P web we want to help build as a transitionary step from the web of today to the possible Web3 of tomorrow; a sort of Web 2.5 if you will.

You can build Socket apps, with full P2P and multiplayer collaborative capabilities, without ever touching a single blockchain or cryptocurrency transaction. And you can also take Socket's P2P model and run fully in tandem with the latest and greatest Web3 explorations.

We think developers and users should get to decide that future, not big cloud corps.
