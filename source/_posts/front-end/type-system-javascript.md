---
title: Typescript & Flow in React&Redux SPA Development
date: 2018-05-02 10:20:15
tags:
category: 前端开发
---

* Purpose
* Rapidly
* Explore
* Feedback
* Eliminate
* Record

# Purpose

Introduce type system to our **application** and **library** project.

* avoid type error when calling functions in **run time**
* discover and remove type error in **compile time**
* help developers to **use function easily** as the **project size/complexity increase**

# Rapidly

Develop

* One application that have type system
* One library that have type system and can be used by application we develop before

Both of them need to support type in

* Helper
* React
* Redux
* Styled-Component
* Works Well With Jest
* Absolute Path

# Explore

* [Typscript-vs-flow](https://github.com/niieani/typescript-vs-flowtype) is a good **general compare**
* [Type Systems: Structural vs. Nominal typing explained](https://medium.com/@thejameskyle/type-systems-structural-vs-nominal-typing-explained-56511dd969f4)

|                       | Flow                                                                                                                         | Typescript                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Author                | Facebook                                                                                                                     | Typescript                                                                                      |
| IDE & Language server | Atom(Slow&High Memory consumption)                                                                                           | VS studio code(Fast)                                                                            |
| Build tool            | Babel                                                                                                                        | Typescript                                                                                      |
| Start tool            | natively built in at **Create React App**                                                                                    | Need to use **Create React App Typescript**                                                     |
| Ecosystem             | [Flow Type](https://github.com/flowtype/flow-typed) - Medium Size                                                            | [Typescript](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types) - Large Size |
| Application Example   | [Create ](https://github.com/flowtype/flow-typed)                                                                            |                                                                                                 |
| Good Library Example  | [Flow Type](https://github.com/flowtype/flow-typed) - Medium                                                                 |                                                                                                 |
| Basic Syntax          | equal                                                                                                                        | equal                                                                                           |
| High Level Concept    | [structural typing for objects and functions, nominal typing for classes](https://flow.org/en/docs/lang/nominal-structural/) | [Mostly Structural](https://basarat.gitbooks.io/typescript/docs/tips/nominalTyping.html)        |

## Rerference

https://github.com/DimiMikadze/create-react-library

https://github.com/alexjoverm/typescript-library-starter

## React Redux Typescript Guide

https://github.com/piotrwitek/react-redux-typescript-guide

regeneratorRuntime

## Typescript Logic

https://www.typescriptlang.org/docs/handbook/compiler-options.html

npx tsc --traceResolution | code -

https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping

## Webpack solution for abs=>relative when exporting

https://decembersoft.com/posts/say-goodbye-to-relative-paths-in-typescript-imports/

## Babel solution for abs=>relative when exporting

https://github.com/entwicklerstube/babel-plugin-root-import

## Compile source code solution

* https://www.npmjs.com/package/@coldmind/tspath (Adopted)
* https://www.npmjs.com/package/convert-root-import

## Share Regenerator runtime

https://github.com/wmonk/create-react-app-typescript/issues/88

## Regenerator runtime package

git@github.com:agraboso/redux-api-middleware.git

## TS official for module resolution& abs=>relative when exporting

https://github.com/Microsoft/TypeScript/issues/9910#issuecomment-234729007

## Existing Famous library

https://github.com/ant-design/ant-design

## Typscript issue

https://github.com/webpack/webpack/issues/4039

## Useful

https://medium.com/@stokedbits/adventures-in-creating-a-react-component-library-with-create-react-app-and-typescript-26d1116a7d87

https://github.com/Microsoft/TypeScript/issues/9910#issuecomment-234729007

https://github.com/Microsoft/TypeScript/issues/15479

https://github.com/wmonk/create-react-app-typescript/issues/254

CRA-TS use babel & ts-loader

feasible but a little bit stuck at path resolution

# Feedback

## Typescript

Build application using typescript - Done
Build library using typescript - Done
resolve absolute path issue with typescript lib -

### Fact

typescript module resolution don't rewrite path

### Solution

* Rewrite ~ to ../ e.g convert-root-import ,low maintainability
* Typescript to webpack(module resolver to one big bundle)
* Typescript to AMD package
* Angular (module resolver to one big bundle)

## Flow

Build application using typescript - very slow ide performance when using atom

### Fact

No good solution to the ide

# Eliminate

Flow

# Record

    "baseUrl": "src",
    "paths": {
        //without baseUrl,the default+-
        ---
        -------
        "*": ["*"]
        //after baseUrl,the default
        "*":["src/*]

    },

## Conversion

tspath -f --jsPath ./dist

return relativePath.replace("/" + mapping, "");

https://stackoverflow.com/questions/42356508/how-to-get-tsc-to-resolve-absolute-paths-when-importing-modules-using-baseurl

https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#concatenate-amd-and-system-modules-with---outfile
