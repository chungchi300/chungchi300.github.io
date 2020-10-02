---
title: Event Loop & Thread Pool
date: 2020-10-02 10:20:15
tags:
category: Web Development
---

# 1. Introduction

The core concept of nodejs is there is a part of asynchronous non blocking IO API which works in a way that we normally called **event loop**.

# 2. Example & Analogy

{% asset_img event_loop&fish.jpg %}

There is an example for how **setTimeout**(IO kind) works.

There is also how real life scenario we can see in daily life.

P.S

1. In nodejs , the webapi part sometimes called (event demulitplexer + Low Level IO), the task queue also call event queue.

# 3. Vs Thread Pool

Java use thread pool. If there is 10 request in the same that they can only handle 5 thread(the maximum number in thread pool) but event loop model can handle limitless.

{% asset_img thread_pool_vs_event_loop.jpg %}

# 4. Adv

1. Handle enormous request(IO bound) concurrently in a effective way.

# 5. Dis Adv

1. Harder to debug when crash
2. Need to have extra care when there is lot of CPU bound request
3. Hard to organize code due to the callback way

## 5.1. Callback hell

The problem of callback is

1. no catching
2. hard to chain
3. vertical deeper(hard to read).

### 5.1.1. Potential Solution

1. Promise
2. Generator

In promise there is more useful way, check this out

https://github.com/chungchi300/head-first-cracking-the-coding-interview-on-hackerrank/blob/master/src/__tests__/nodejs-advance/promise/async-timeout-callback.js

https://github.com/chungchi300/head-first-cracking-the-coding-interview-on-hackerrank/blob/master/src/__tests__/nodejs-advance/promise/async-timeout-in-js.js

## 5.2. CPU Bound task in nodejs

Since javascript is single thread. You can do use cluster model as potential solution

https://github.com/chungchi300/head-first-cracking-the-coding-interview-on-hackerrank/blob/master/src/__tests__/nodejs-advance/done/multi-process-concurrency.js

# 6. Ref

https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf
