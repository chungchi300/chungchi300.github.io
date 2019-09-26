---
title: From 884KB to 180KB, 3 major things you need to reduce your create react app bundle size
date: 2018-09-13 10:20:15
tags:
category: Web Development
---

# Dependency package analyze

**Ejection is not required!**, all your need is add this to your dependency package

```json
 "analyze": "npm run build -- --stats&&npx webpack-bundle-analyzer ./build/bundle-stats.json",
```

and then run it

```
npm run analyze
```

then you can find the related report at `http://127.0.0.1:8888/`

## For dependency package that is never used but imported, you should remove it

e.g I remove `XLSX` dependency package that is huge but it just imported but never used which help me reduce `300KB`.

## For dependency package that has tree shaking

e.g I has included entire `material ui` but I can reduce `200KB` by more specific import,e.g `import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";`

## Dependency package that has not import and analyze

Although it will not reduce the package size, but it reduce dead dependency & readability of `package.json`

```json
    "unused": "npx depcheck .&",
```

and then run it

```
npm run unused
```

# Code Splitting

User don't need to download entire app when he just watch one page. We can serve one page code for this scenario which call **[code split](https://reactjs.org/docs/code-splitting.html)**. Code Split has **official support** in **React** which are **Lazy and Suspense**.
You can combine them with React timeout to avoid flicking

```javascript
import React, { Suspense, lazy } from "react";
```
