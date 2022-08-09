## Cross-Platform Properties

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `build` | | | Shell command to build an application |
| `bundle_identifier` | | |  A unique ID that identifies the bundle (used by all app stores). |
| `copyright` |  |  |  |
| `debug_flags` | | | Advanced Compiler Settings for debug purposes (ie C++ compiler -g, etc). |
| `description` | | | A short description of the app |
| `env` | | | An array of environment variables, separated by commas |
| `executable` | ![check](/images/icons/checkmark.svg) | | The name of the file to be output. |
| `flags` | | | Advanced Compiler Settings (ie C++ compiler -02, -03, etc). |
| `forward_console` | | | |
| `height` | | | The initial height of the first window |
| `input` | | | A directory is where your application's code is located |
| `lang` | | | Localization |
| `maintainer` | | | |
| `name` | ![check](/images/icons/checkmark.svg) | | The name of the program |
| `output` | ![check](/images/icons/checkmark.svg) | | The binary output path |
| `title` | | | The initial title of the window (can have spaces and symbols etc). |
| `version` | ![check](/images/icons/checkmark.svg) | | A string that indicates the version of the cli tool and resources. |
| `version_short` | | | A string that indicates the version for MacOS. |
| `width` | | | The initial width of the first window |


## Windows

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `revision` | | | TODO: maybe the user doesn’t need to know about this? |
| `win_cmd` | ![check](/images/icons/checkmark.svg) | | The command to execute to spawn the “back-end” process. |
| `win_icon` | | | The icon to use for identifying your app on Windows. |
| `win_logo` | | | The icon to use for identifying your app on Windows. |
| `win_pfx` | | | A relative path to the pfx file used for signing. |
| `win_publisher` | | | The signing information needed by the appx api. |


## Linux

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `linux_categories` | | | Helps to make your app searchable in Linux desktop environments |
| `linux_cmd` | ![check](/images/icons/checkmark.svg) | | The command to execute to spawn the “back-end” process. |
| `linux_icon` | ![check](/images/icons/checkmark.svg) | | The icon to use for identifying your app in Linux desktop environments. |

## macOS and iOS

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `apple_team_id` | ![check](/images/icons/checkmark.svg) | | |

## macOS

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `mac_appstore_icon` | | | Mac App Store icon |
| `mac_category` | | | A category in the App Store |
| `mac_cmd` | ![check](/images/icons/checkmark.svg) | | The command to execute to spawn the “back-end” process. |
| `mac_distribution_method` | | | |
| `mac_entitlements` | | | plist file path |
| `mac_icon` | ![check](/images/icons/checkmark.svg) | | The icon to use for identifying your app on MacOS. |
| `mac_provisioning_profile` | | | |
| `mac_sign` | | | |
| `mac_codesign_identity` | | | |
| `mac_sign_paths` | | | |


## iOS

| Property | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `ios_simulator_device` | | | which device to target when building for the simulator. The list of available devices: `xcrun simctl list devicetypes` |
| `ios_entitlements` | ![check](/images/icons/checkmark.svg) | | plist file path |
| `ios_distribution_method` | ![check](/images/icons/checkmark.svg) | | |
| `ios_provisioning_profile` | ![check](/images/icons/checkmark.svg) | | The provisioning profile that is used for signing (should be mac?) |
| `ios_codesign_identity` | ![check](/images/icons/checkmark.svg) | | |


## Android

| Property | Optional | Default | Description |
| :--- | :--- | :--- | :--- |
|||||
