## Getting Started

Open a terminal, navigate to where you keep your code. Create a directory and
initilaize it.

```
op . --init
```

This will create an `operator.config` file as well as a `src` directory
with an `index.html` file in it. First, open the config file in your editor
and replace some of the example values with your own.

### Coding a UI

UI is written in HTML, JS and CSS. Of course you can bring whatever tools you
want to the party. But let's start simple. The easiest way to see your UI is to
build this as a desktop app and show a window that runs the code.

```
op . -r
```

### Development Cycle

You'll probably want to write some code, see it, change it, and repeat this
flow. The typical approach is to create a watch script that rebuilds your
files when there are changes. If you provide a port, the `op` command will try
to load `http://localhost`.

```
op . -r --port=8000
```

You'll need to tell your build script the output location. The `op` command
can tell you the platform specific build destination. For example.

```
./myscript `op . --target`
```

### Building for and launching the mobile simulator

After you get your UI looking how you want. The next step is to try it out
on the simulator. At this point we can use either the `-ios` or `-android`
flags as well as the `-simulator` flag. This will createa a platform specific
bundle, create and launch a simulator (if needed) and then run your app.

```
op . -ios -simulator
```

### Debugging on the simulator

You can use Safari to attach the Web Inspector to the Simulator. In the Safari
menu, navigate `Develop -> Simulator -> index.html`. This will be the exact
same inspector you get while developing desktop apps.

## Next Steps

### API Reference

The JavaScript APIs are the same on iOS and Android. To see which methods
and properties are available, check out the [Mobile API][0] docs.

### Production

For specifics about production builds and deploying to devices and app stores,
see either the [iOS][1] or [Android][2] guides.

[0]:https://operatorframework.dev/mobile
[1]:https://operatorframework.dev/ios
[2]:https://operatorframework.dev/android

