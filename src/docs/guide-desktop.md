# Desktop Guide

 ## 1- Windows 

This guide shows how to set up your development environment, all the requirements needed, and step by step  
on how to build `Socket` app displaying `Hello, Word.` on Windows 10

## Getting Started

### Requirements
To develop apps for Windows 10 you need:
* [Windows](https://www.microsoft.com/en-us/windows/) 10
* [Visual Studio](https://visualstudio.microsoft.com/downloads/) 2022

### Installing SSC and build dependencies

After downloading and installing `Visual studio` , you can run any of the [Windows](./guide-fte#install) commands
to get `SSC` installed.  

![](../images/screenshots/ssc-install.png)  


If you don't have `Git`, `CMake`, and `Clang 15.0.0`installed already on your  
machine, it will prompt you to intall them, just hit `y`.  

![](../images/screenshots/git-cmake.png)

After installing all of the above, you should be able to `cd socket` and run   
```
.\bin\install\ps1
```
to install the build dependencies.  

You are all set, you can now to check that `ssc` is installed by 
running 
```
ssc --version
```

### Build Socket app  

Before building the app, you need to open `socket` directory and run:

```
ssc init
```
you are now ready to use the `build` command. Enter the following command on your terminal :
```
ssc build -r -o
```
![](../images/screenshots/app-built.png)

If you encounter any issues you can check [Windows troubleshooting](./troubleshooting#Windows) or you can ask your questions on our [Discord](https://discord.com/invite/YPV32gKCsH)


## 2-Linux  

You don't have to install any software, no prerequisites, open your terminal and 
run one of the [Linux](./guide-fte.md#install) commands to get started.  
`note`: if you choose `npm` package manager, you will need to run the command with elevated privileges, prefix `sudo` with the Linux command :
```
sudo npm i @socketsupply/socket -g
```

