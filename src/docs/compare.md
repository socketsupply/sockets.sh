## Feature Matrix
All platforms can produce executables for `Windows`, `Linux`, and `MacOS`.

| Framework        | Any Backend | Native Packaging | Zero Deps | iOS | Android |
| :---             | :---        | :---             | :---      | :---   | :--- |
| **Operator**     | ![check](images/icons/checkmark.svg)         | ![check](images/icons/checkmark.svg)              | ![check](images/icons/checkmark.svg)       | ![check](images/icons/checkmark.svg)    | ![check](images/icons/checkmark.svg) |
| **Tauri**        |          | ![check](images/icons/checkmark.svg)              |        |     | |
| **Electron**     |          |               |        |     | |
| **NW.js**        |          |               |        |     | |
| **Neutralinojs** | ![check](images/icons/checkmark.svg)         |               |        |     | |

## Operator Framework
<time>Sat Mar 26 13:54:19 CET 2022</time>

```
cloc ./src/*.cc ./src/*.hh
```

|Language    |files|blank  |comment|  code|
|:---        | ---:|   ---:|   ---:|  ---:|
|C/C++ Header|    9|    919|    391|  4179|
|C++         |    5|    478|    166|  1753|
|*SUM*       | *14*| *1397*|  *557*|*5932*|

## Neutralinojs
<time>Sat Mar 26 13:54:19 CET 2022</time>

```
cloc *.cpp *.h spec server api auth bin lib
```

|Language         |files        |blank          |comment        |          code|
|:---             |         ---:|           ---:|           ---:|          ---:|
|C/C++ Header     |          699|          29484|          53091|        130710|
|C++              |          110|           4347|           2097|         26756|
|JSON             |            6|              0|              0|          2125|
|JavaScript       |           17|            192|             23|          1901|
|Perl             |            6|            233|            174|          1869|
|make             |            3|             12|              1|           701|
|Objective-C++    |            1|             64|             15|           267|
|m4               |            1|             31|              0|           213|
|HTML             |            2|              0|              0|            32|
|Bourne Shell     |            1|             10|             14|            31|
|CSS              |            1|              2|              0|            12|
|CMake            |            1|              0|              0|             2|
|*SUM*            |        *848*|        *34375*|        *55415*|      *164619*|

## Electron
<time>Sat Mar 26 13:54:19 CET 2022</time>

```
cloc *.json lib spec spec-main shell patches typings
```

|Language         |files        |blank          |comment        |          code|
|:---             |         ---:|           ---:|           ---:|          ---:|
|C++              |          343|          11586|           5160|         56956|
|TypeScript       |          161|           4839|           1673|         33288|
|C/C++ Header     |          359|           5686|           3432|         18232|
|diff             |          184|           1758|           7074|         11688|
|Objective-C++    |           55|           1951|           1040|          8880|
|JavaScript       |          184|           1109|            287|          6958|
|HTML             |          174|            328|              9|          4346|
|JSON             |           69|             23|              0|          1386|
|XML              |            7|              0|              8|           342|
|Markdown         |            3|             34|              0|           116|
|YAML             |            2|              1|             11|           116|
|Bourne Shell     |            1|             16|              5|           106|
|IDL              |            2|             11|              0|            75|
|Windows Rc File  |            1|             20|             28|            59|
|Mojo             |            1|             17|             10|            56|
|Python           |            2|              0|              0|            23|
|CSS              |            3|              0|              0|             7|
|CoffeeScript     |            1|              0|              0|             1|
|*SUM*            |       *1552*|        *27379*|        *18737*|      *142635*|
