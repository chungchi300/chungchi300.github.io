---
title: From 7 fps to 37 fps-How to use web worker on create react app(CRA) project
date: 2018-08-17 10:20:15
? tags
category: Web Development
---

{% asset_img cover.jpeg %}

# Understand the problem

## Surface problem

In our medical project,when importing segmentation(it was a **compute intensive task**).It feels **freezing of UI**.

## Actual problem

How to **implement compute intensive task** in **Create React App** without causing the freezing of main(UI) thread.

# Devise a plan

## Relation

## Web worker property

{% asset_img parallelism-vs-concurrency.png %}

- Provide **running script** in **background thread**
- Not only **concurrency** but also **parallelism**

## Web worker restriction

### Browser restriction

[Can I use ](https://caniuse.com/#feat=webworkers)

### Restriction by design

Not allow to use

- DOM
- Local Storage
- Only allow to communicate with main thread via message api(we will use worker to simply following process)

## Plan

1. Push compute intensive job to web worker in main thread
2. Web worker will notify main thread once compute intensive job done.

The notification interface better be **promise** instead of callback for code readability

# Carry out the plan

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

# Misc

## Reference

- http://javascript.ruanyifeng.com/htmlapi/webworker.html

## What if I need to support IE9 which don't have web worker

I suggest you to use `setTimeout` **break down your task** to achieve concurrency to avoid freezing the main(UI) thread

## Writing Methodology

This is written according to [How to solve it](https://en.wikipedia.org/wiki/How_to_Solve_It)
