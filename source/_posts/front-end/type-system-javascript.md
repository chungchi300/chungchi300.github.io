---
title: Typescript & Flow in React&Redux SPA Development
date: 2018-05-02 10:20:15
tags:
category: Web depevelopment
---

# Purpose

Introduce type system to our **application** and **library** project.

* discover and remove type error in **compile time**
* Increase the **ease of refactoring**
* help developers to **use function easily** as the **project size/complexity increase**

# Rapidly

**Develop new empty project as explorer tool**

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

Candidates:

1.  Typescript
2.  Flow

## Compare

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

## Knowledge about type system

[Nominal Type](https://en.wikipedia.org/wiki/Nominal_type_system)
[Structural Type](https://en.wikipedia.org/wiki/Structural_type_system)

## Typescript Compiler

### Option

https://www.typescriptlang.org/docs/handbook/compiler-options.html

### Path mapping when you use absolute path

https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping

### Debug skill

```
npx tsc --traceResolution | code -
```

## Absolute path problem when export library

### Fact

typescript module resolution don't rewrite path when export

### Compile source code solution

* https://www.npmjs.com/package/@coldmind/tspath
* https://www.npmjs.com/package/convert-root-import

### Webpack solution for absolute=>relative when exporting

https://decembersoft.com/posts/say-goodbye-to-relative-paths-in-typescript-imports/

### Babel solution for absolute=>relative when exporting

https://github.com/entwicklerstube/babel-plugin-root-import

## React Redux Typescript Coding Guide

https://github.com/piotrwitek/react-redux-typescript-guide

## Use library with babel RegeneratorRuntime when your build tool is typescript

Project like git@github.com:agraboso/redux-api-middleware.git regeneratorRuntime as babel async,we need to rebuild by typescript version

https://github.com/wmonk/create-react-app-typescript/issues/88

## Use create-react-app-ts to create library&application

https://medium.com/@stokedbits/adventures-in-creating-a-react-component-library-with-create-react-app-and-typescript-26d1116a7d87

## Create Library Reference

https://github.com/DimiMikadze/create-react-library

https://github.com/alexjoverm/typescript-library-starter

## Existing Famous library using typescript

https://github.com/ant-design/ant-design

## Jest

* Install ts-jest to compile .ts file
* Tell Jest for module resolution like this in package.json

```
 "jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleDirectories": [
      "src",
      "node_modules"
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }
```

# Feedback

## Typescript

Build application using typescript - Done  
Build library using typescript - Done  
resolve absolute path issue with typescript lib - Done

## Solution for different issue

### Absolute path problem when export library

**Compile source code solution** is adopted for no configuration for the library user.

### Coding Guide

[Airbnb](https://github.com/airbnb/javascript)
[React Redux Typescript guide](https://github.com/piotrwitek/react-redux-typescript-guide)

is adopted

### Test

ts-jest is adopted for running .test.ts file

# Eliminate

Flow

* very slow ide performance when using atom
* very slow/buggy language server resolution

# Record

Successfully substitute our stack to **typescript** for project that have **large scale**

## Main-Advantage

* Simplified build tool chain for lib & app

## Extra Benefit

### General

* VSCode support make **Unit Test && Refactor** Faster
* API generation
* styleguide make **Dummy Component Development** Faster
* Function(**jsx nested called**) calling **faster due to auto complete**
* Discover type error in **compile type**

### Specific

* Library generated in Common Js format instead of **big umd file** so significantly increase **Readability of library**
* Able to generate test coverage
* Able to generate style guide
* Remove export file that reduce code redundancy(because the user is directly utilize the code)
