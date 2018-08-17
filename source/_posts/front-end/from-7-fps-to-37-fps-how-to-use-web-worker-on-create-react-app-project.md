---
title: From 7 fps to 37 fps-How to use web worker on create react app(CRA) project
date: 2018-08-17 10:20:15
? tags
category: Web Development
---

{% asset_img cover.jpeg %}

# What is the problem?

## Surface problem

In our medical project,when importing segmentation(it was a **compute intensive task**).It feels **freezing of UI**.

## Actual problem

How to **implement compute intensive task** in **Create React App** without causing the freezing of main(UI) thread.

# Relation

## Web worker property

- Provide **running script** in **background thread**
- Not only concurrency but also parallelism

## Web worker restriction

Not allow to use

- DOM
- Local Storage
- Only allow to communicate with main thread via message api(we will use worker to simply following process)

# Implementation

## Tool

[Workerize-loader](https://github.com/developit/workerize-loader)

Adv:

that don't need **ejection** of your **Create React APP**.

## Before

```javascript
//index.js
readSegmentation(segmentation){
   return computeIntensive(segmentation);
}
readSegmentation(s1);
```

## After

```javascript
//segmentation.js
read(segmentation){
   return computeIntensive(segmentation);
}
//index.js
import segmentationWorker from 'workerize-loader!./segmentation.js'; // eslint-disable-line import/no-webpack-loader-syntax
const segmentationInst = segmentationWorker();
//the message interface is convert to promise
await segmentationInst.read(s1);
```

# Verification

## Optimization Result

### Before

{% asset_img before.png %}

- Intensive CPU usage only existed in main thread
- fps **drop** to 7 fps

### After

{% asset_img after.png %}

- Intensive CPU usage only existed in **dedicated worker thread**
- fps **increase** to 37 fps

# Reference

- http://javascript.ruanyifeng.com/htmlapi/webworker.html
