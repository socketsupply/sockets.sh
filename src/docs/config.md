```ini
;  ___  __   ___      __ ____
; /__  /  / /   /_/  /_   /
; __/ /__/ /__ /  \ /__  /
;
; Socket ⚡︎ Runtime · A modern runtime for Web Apps · v{{ssc_version}}
;

; The shell command to execute when building an application. This is the most
; important command in this file. This will do all the heavy lifting and should
; handle 99.9% of your use cases for moving files into place or tweaking
; platform-specific build artifacts.
build = "node build-script.js"

; A unique ID that identifies the bundle (used by all app stores).
bundle_identifier = "com.beepboop"

; A string that gets used in the about dialog and package meta info.
copyright = "(c) Beep Boop Corp. 1985"

; A short description of the app.
description = "A UI for the beep boop network"

; An list of environment variables, separated by commas.
env = USER, TMPDIR, PWD

; The name of the file to be output.
executable = "boop"

; If false, the window will never be displayed.
headless = false

; Advanced Compiler Settings (ie C++ compiler -02, -03, etc).
flags = -O3

; Set the limit of files that can be opened by your process.
file_limit = 1024,

; A directory is where your application's code is located.
input = "src"

; Localization
lang = "en-us"

; A String used in the about dialog and meta info.
maintainer = "Beep Boop Corp."

; The name of the program
name = "beepboop"

; The binary output path. It's recommended to add this path to .gitignore.
output = "dist"

; TODO: maybe the user doesn't need to know about this? 
revision = 123

; A string that indicates the version of the application. It should be a semver triple like 1.0.0
version = 0.0.1

[debug]

; Advanced Compiler Settings for debug purposes (ie C++ compiler -g, etc).
flags = "-g"


[android]

; TODO description needed
main_activity = ""


[ios]

; signing guide: https://sockets.sh/guides/#ios-1
codesign_identity = ""

; Describes how Xcode should export the archive. Available options: app-store, package, ad-hoc, enterprise, development, and developer-id.
distribution_method = "ad-hoc"

; A path to the provisioning profile used for signing iOS app.
provisioning_profile = ""

; which device to target when building for the simulator
simulator_device = "iPhone 14"


[linux]
; Helps to make your app searchable in Linux desktop environments.
categories = "Developer Tools"

; The command to execute to spawn the "back-end" process.
cmd = "beepboop"

; The icon to use for identifying your app in Linux desktop environments.
icon = "src/icon.png"


[mac]

; Mac App Store icon
appstore_icon = "src/icons/icon.png"

; A category in the App Store
category = ""

; The command to execute to spawn the "back-end" process.
cmd = ""

; The icon to use for identifying your app on MacOS.
icon = ""

; TODO description & value (signing guide: https://sockets.sh/guides/#macos-1)
sign = ""

; TODO description & value
codesign_identity = ""

; TODO description & value
sign_paths = ""


[native]

; Files that should be added to the compile step.
files = native-module1.cc native-module2.cc

; Extra Headers
headers = native-module1.hh


[win]

; The command to execute to spawn the “back-end” process.
cmd = "beepboop.exe"

; The icon to use for identifying your app on Windows.
icon = ""

; The icon to use for identifying your app on Windows.
logo = "src/icons/icon.png"

; A relative path to the pfx file used for signing.
pfx = "certs/cert.pfx"

; The signing information needed by the appx api.
publisher = "CN=Beep Boop Corp., O=Beep Boop Corp., L=San Francisco, S=California, C=US"

[window]

; The initial height of the first window.
height = 80%

; The initial width of the first window.
width = 80%
```
