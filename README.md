# TFS extension for Visual Studio Code

**Visual Studio Code Team Foundation Server integration**

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/github/release/bheklilr/vscode-tfs.svg?style=flat-square)](https://github.com/XewTurquish/vscode-tfs/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/bheklilr.vscode-tfs.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=bheklilr.vscode-tfs)

---

## Important !

> **You MUST have a Visual Studio with Team Foundation Server features to be able to use this extension.**

## Installation

1.  Open up VS Code
2.  Type **`F1`**
3.  Type `ext` in command palette.
4.  Select `Extensions: Install Extension` and hit **`ENTER`**
5.  Type `tfs`
6.  Select **`TFS`** extension and hit **`ENTER`**

## Configuration

You need to provide a path to the TF command line client used by the extension to perform TFS actions.
To set this path, add the following entry to Settings (**File > Preferences > Settings**):

```javascript
    "tfs.location": "<path-to-tf-command-line>"
```

If you plan to use the `tf.exe` command line provided by the Visual Studio IDE, the value to provide will be similar to `C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\Common7\\IDE\\TF.exe`.

## Features

* **Automatic Checkout (for Edit)** on saving a file.

### List of available commands

* **Add**
* **Checkout**
* **Undo**
* **Open In Browser**
* **Delete**

## Issues

Please report any issue or comment [here](https://github.com/bheklilr/vscode-tfs/issues).

## Contribute

To be able to contribute to TFS development, you need to be at ease with **NodeJS** language and **Git** usage.

    git clone https://github.com/bheklilr/vscode-tfs.git
    cd vscode-tfs
    npm install
    npm test

## About the fork

This is a fork of [generalov.vscode-tfs](https://marketplace.visualstudio.com/items/generalov.vscode-tfs). The changes are:

* Configurable path to `tf.exe` binary.
* New TFS menu commands.
* Fixed checkout for edit on save.
* Improved error handling.
* Registered each action as a VS Code command so that it can be called directly
* Added a Delete command
* Opened up issues so bugs or feature requests can be made.

This was forked from generalov.vscode-tfs because that repository had not been committed to in over a year.  I felt it easier to just make the changes myself and re-publish.  Pull requests welcome.

#### Links

* [TFS extension on Github](https://github.com/XewTurquish/vscode-tfs)
* [TFS extension on Visual Studio Market Place](https://marketplace.visualstudio.com/items/bheklilr.vscode-tfs)
* [MIT Licence](https://github.com/XewTurquish/vscode-tfs/blob/master/LICENCE)
