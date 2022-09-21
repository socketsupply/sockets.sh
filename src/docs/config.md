## Cross-Platform Properties

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `build` | | | Shell command to build an application |
| `bundle_identifier` | | |  A unique ID that identifies the bundle (used by all app stores). |
| `copyright` |  |  | A string that gets used in the about dialog and package meta info. |
| `debug_flags` | | | Advanced Compiler Settings for debug purposes (ie C++ compiler -g, etc). |
| `description` | | | A short description of the app |
| `env` | | | An array of environment variables, separated by commas |
| `executable` | ![check](/images/icons/checkmark.svg) | | The name of the file to be output. |
| `flags` | | | Advanced Compiler Settings (ie C++ compiler -02, -03, etc). |
| `forward_console_to_stdout` | | false | A boolean that determines if WebKit WebView logs should get forwarded to stdout and stderr |
| `height` | | | The initial height of the first window |
| `input` | | | A directory is where your application's code is located |
| `lang` | | en-us | Localization |
| `maintainer` | | | A String used in the about dialog and meta info. |
| `name` | ![check](/images/icons/checkmark.svg) | | The name of the program |
| `output` | ![check](/images/icons/checkmark.svg) | dist | The binary output path. It's recommended to add this path to .gitignore. |
| `revision` | | 1 | TODO: maybe the user doesn’t need to know about this? |
| `title` | | | The initial title of the window (can have spaces and symbols etc). |
| `version` | ![check](/images/icons/checkmark.svg) | | A string that indicates the version of the application. It should be a semver triple like 1.0.0 |
| `width` | | | The initial width of the first window |


## Windows

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `win_cmd` | | | The command to execute to spawn the “back-end” process. |
| `win_icon` | | | The icon to use for identifying your app on Windows. |
| `win_logo` | | | The icon to use for identifying your app on Windows. |
| `win_pfx` | | | A relative path to the pfx file used for signing. |
| `win_publisher` | | | The signing information needed by the appx api. |


## Linux

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `linux_categories` | | | Helps to make your app searchable in Linux desktop environments |
| `linux_cmd` | | | The command to execute to spawn the “back-end” process. |
| `linux_icon` | | | The icon to use for identifying your app in Linux desktop environments. |

## macOS and iOS

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `apple_team_id` | | | The team ID needed for MacOS and iOS distribution and development |

## macOS

[macOS code signing guide][/guides/#macos-1]

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `mac_appstore_icon` | | | Mac App Store icon |
| `mac_category` | | | A category in the App Store |
| `mac_cmd` | | | The command to execute to spawn the “back-end” process. |
| `mac_icon` | | | The icon to use for identifying your app on MacOS. |
| `mac_sign` | | | |
| `mac_codesign_identity` | | | |
| `mac_sign_paths` | | | |


## iOS

[iOS code signing guide][/guides/#ios-1]

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `ios_codesign_identity` | | | Indicates the identity to be used for signing. |
| `ios_distribution_method` | | | The distribution method (ad-hoc, etc.) |
| `ios_provisioning_profile` | | | A path to the provisioning profile used for signing iOS app. |
| `ios_provisioning_specifier` | | | A provisioning specifier used for signing iOS app. |
| `ios_simulator_device` | | | Which device to target when building for the simulator. The list of available devices: `xcrun simctl list devicetypes` |


## Android

| Property | Optional | Default | Description |
| :--- | :--- | :--- | :--- |
|||||
