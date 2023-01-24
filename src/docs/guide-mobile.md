# Mobile Guide

## Develop & Debug Cycle

You'll want to write code, see it, change it, and repeat this cycle. So the
typical approach is to create a watch script that rebuilds your files when
there are changes. If you provide a port, the `ssc` command will try to load
`http://localhost`.

```
ssc build -r --port=8000
```

You'll need to tell your build script the output location. The `ssc` command
can tell you the platform specific build destination. For example.

```
./myscript `ssc list-build-target .`
```

## Running the Mobile Simulator

After you get your UI looking how you want. The next step is to try it out
on the simulator. At this point, we can use either the `-ios` or `-android`
flags as well as the `-simulator` flag. This will create a a platform specific
bundle, create and boot a simulator VM and then run your app in simulator if
`-r` flag is provided.

```
ssc build --target=iossimulator -r
```

## Debugging in the Mobile Simulator

You can use Safari to attach the Web Inspector to the Simulator. In the Safari
menu, navigate to `Develop -> Simulator -> index.html`. This will be the exact
same inspector you get while developing desktop apps.

## Next Steps

The JavaScript APIs are the same on iOS and Android, check out the [API][0] docs.

[0]:https://sockets.sh/api
