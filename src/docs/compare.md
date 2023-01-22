## Feature Matrix
<time>Sat Apr  9 11:37:09 CEST 2022</time>

|                         | Socket                                | Tauri                                 | Electron |
| :---                    | :---:                                 | :---:                                 | :---:    |
| MacOS, Windows, Linux   | ![check](/images/icons/checkmark.svg) | ![check](/images/icons/checkmark.svg) | ![check](/images/icons/checkmark.svg) |
| Any Backend             | ![check](/images/icons/checkmark.svg) |                                       | |
| Backend Optional        | ![check](/images/icons/checkmark.svg) |                                       | |
| Native Packaging        | ![check](/images/icons/checkmark.svg) | ![check](/images/icons/checkmark.svg) | |
| iOS                     | ![check](/images/icons/checkmark.svg) | In Progress                           | |
| Android                 | ![check](/images/icons/checkmark.svg) | Roadmap                               | |
| Native UDP & Bluetooth  | ![check](/images/icons/checkmark.svg) |                                       | |
| Native P2P              | ![check](/images/icons/checkmark.svg) |                                       | |
| Native Drag & Drop      | ![check](/images/icons/checkmark.svg) |                                       | |
| Desktop Tray            |                                       | ![check](/images/icons/checkmark.svg) | ![check](/images/icons/checkmark.svg) |
| Desktop Icon Badges     |                                       |                                       | ![check](/images/icons/checkmark.svg) |

#### Maintainability Profile Summary (Measured with `cloc`)

<div class="complexity">
  <div><div style="height: 11.742893305510895%;"></div><b>17164</b><br/>Socket</div>
  <div><div style="height: 35.567338282078474%;"></div><b>51987</b><br/>Tauri</div>
  <div><div style="height: 100%;"></div><b>146165</b><br/>Electron</div>
</div>

#### Memory Profile Summary (Desktop only, measured with `mprof`)

<div class="complexity">
  <div><div style="height: 51.2962962962963%;"></div><b>&plusmn;55.4</b><br/>Socket</div>
  <div><div style="height: 78.70370370370371%;"></div><b>&plusmn;85Mb</b><br/>Tauri</div>
  <div><div style="height: 100%;"></div><b>&plusmn;108Mb</b><br/>Electron</div>
</div>

> Note: `mprof` was also run for periods of up to 1 hour. Also, the `uss` and
`pss` backends yielded results that are relative to the default backend.

## Socket
<time>Mon Jan  2 13:44:43 CET 2023</time>

### Maintainability Profile
```
cloc src test
```

```text
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
C++                             21           2367            598          11369
C/C++ Header                    11            668            203           4124
Objective-C++                    2            290             72           1017
Kotlin                           5            153             43            608
Bourne Shell                     1             16              9             46
-------------------------------------------------------------------------------
SUM:                            40           3494            925          17164
```

### Memory Profile

![socket-mprof](/images/mprof/socket-mprof.png)


## Tauri
<time>Mon Jan  2 13:58:36 CET 2023</time>

### Maintainability Profile
```
cloc core tooling
```

```text
Language                      files          blank        comment           code
--------------------------------------------------------------------------------
Rust                            174           4995           7961          36454
Markdown                         42           1336              1           4747
JSON                             37              0              0           4126
TypeScript                       27            383           3490           2994
JavaScript                       29            176            165           1186
TOML                             23             99             24            926
Bourne Again Shell                2             67             57            429
WiX source                        1             36             11            264
YAML                              8             38              0            261
HTML                              8             14              0            220
XML                               4              0              5            163
CSS                               2             17              0             92
Svelte                            2             15              0             61
PowerShell                        2              6             11             34
Bourne Shell                      2              4              4             18
SVG                               3              0              0              8
Standard ML                       3              0              0              3
Text                              1              0              0              1
--------------------------------------------------------------------------------
SUM:                            370           7186          11729          51987
```

### Memory Profile

![tauri-mprof](/images/mprof/tauri-mprof.png)

## Electron
<time>Mon Jan  2 13:58:36 CET 2023</time>

### Maintainability Profile
```
cloc *.json lib shell patches typings
```

```text
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
C++                            340          11205           5078          56376
TypeScript                     173           5881           1843          39940
C/C++ Header                   358           5530           3382          18148
diff                           214           2058           8277          13594
Objective-C++                   56           1950           1000           8839
HTML                           175            318              9           4290
JavaScript                     196            424            153           2798
JSON                            78             22              0           1478
XML                              7              0              8            357
Markdown                         3             34              0            116
Bourne Shell                     1             16              5            106
Mojo                             2             21             13             70
Python                           2              0              0             23
IDL                              1              3              0             20
CSS                              3              0              0              7
Text                             2              0              0              2
CoffeeScript                     1              0              0              1
-------------------------------------------------------------------------------
SUM:                          1612          27462          19768         146165
```

### Memory Profile

![electron-mprof](/images/mprof/electron-mprof.png)
