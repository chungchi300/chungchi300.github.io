---
title: >-
  Double your development speed in visual studio for Javascript
date: 2018-05-04 10:28:21
category: Implementation
---

![](https://www.nobledesktop.com/image/sem-graphic/code-faster.jpg)

# Before Reading

## What can you learn?

Must know **function** and **keymap** you should look for IDE for

* Coding
* Factoring

(for **react&node js**) to double your ~~coding~~ **development speed** from **pro software engineer**

## How many times it take to read this article?

25 mins

# Read and coding

## Syntax Highlight

Vscode has syntax highlight **JS,JSX,TS,TSX** by default.

## Show Definition when function call

Need [project configuration](#Project-configuration) when absolute import is used

## Find in one file

Vscode Command : actions.find  
Vscode Keymap : `Ctrl` + `F`

## Replace in one file

Vscode Command : editor.action.startFindReplaceAction  
Vscode Keymap : `Ctrl` + `H`  
Suggested Rename Keymap : `Ctrl` + `R`

## Find in files(or a project)

Vscode Command : workbench.action.findInFiles  
Vscode Keymap : `Ctrl` + `Shift` + `F`

## Replace in files

Vscode Command : workbench.action.replaceInFiles  
Vscode Keymap : `Ctrl` + `Shift` + `H`  
Suggested Rename Keymap : `Ctrl` + `Shift` + `R`

## Quick Fix

Vscode Command : editor.action.quickFix  
Vscode Keymap : `Ctrl` + `.`

## Move Line

`Alt` + `arrow up/down`

## Multi cursor editing

`Alt` + `Shift` + `arrow up/down`

# File navigating

Need [project configuration](#Project-configuration) when absolute import is used

## Open File

Vscode Command : workbench.action.files.openFile  
Vscode Keymap : `Ctrl` + `P`

## Go to symbol

Vscode Command : workbench.action.gotoSymbol  
Vscode Keymap : `Ctrl` + `Shift` + `O`  
Suggested Rename Keymap : `Ctrl` + `O`

## Go to definition

Vscode Command : editor.action.goToDeclaration  
Vscode Keymap : `F12`

## Go to Line

Vscode Command : workbench.action.gotoLine  
Vscode Keymap : `Ctrl` + `g`

## Close current editor

Vscode Command : workbench.action.closeWindow  
Vscode Keymap : `Ctrl` + `w`

**Reference**
[File Navigation](https://code.visualstudio.com/docs/editor/editingevolved)

# Refactor

Need [project configuration](#Project-configuration) when absolute import is used

## Rewrite function/variable name

Vscode Command : workbench.action.closeWindow  
Vscode Keymap : `F2`

**Reference**
[Refactoring](https://code.visualstudio.com/docs/editor/refactoring)

# Project configuration

You need `'jsconfig.json'` or `'tsconfig.json'`(when you use typescript) with following config for [**import absolute path**](https://medium.com/@ktruong008/absolute-imports-with-create-react-app-4338fbca7e3d)

```
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

# Setting

## Format on save

```
 "editor.formatOnSave": true,
```

# Extension

## Grammar Checking

[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Prettier

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Markdown

[Markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
