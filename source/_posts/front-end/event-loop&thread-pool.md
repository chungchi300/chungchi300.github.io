---
title: Event Loop & Thread Pool
date: 2020-10-02 10:20:15
tags:
category: Web Development
---

# Introduction

The core concept of nodejs is there is a part of asynchronous non blocking IO API which works in a way that we normally called **event loop**.

# Adv

1. Handle enormous request(IO bound) concurrently in a effective way.

# Dis Adv

1. Harder to debug
2. Need to have extra care when there is lot of CPU bound request

# Example & Analogy

{% asset_img event_loop&fish.jpg %}

There is an example for how **setTimeout**(IO kind) works.

There is also how real life scenario we can see in daily life.

# Vs Thread Pool

Java use thread pool. If there is 10 request in the same that they can only handle 5 thread(the maximum number in thread pool) but event loop model can handle limitless.

{% asset_img thread_pool_vs_event_loop.jpg %}

# Ref

https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf
