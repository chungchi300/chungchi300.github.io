---
title: >-
  How you should do if you want the China Customer can visit your Website that hosted in Alibaba Hong Kong or AWS 
date: 2019-09-25 10:28:21
category: Program design
---

# Before Reading

## What can you learn?

1. How you should do if you want the China Customer can visit your Website that hosted in Alibaba Hong Kong or AWS  which can do by deploying Reverse Proxy Website In China at Alibaba Cloud for Hong Kong and China


# Deploying Reverse Proxy Website In China at Alibaba Cloud for Hong Kong and China
## In China Alibaba
You can create a [reverse proxy nginx server](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) at Alibaba China. If it is an website with specific domain , you need an ICP, but if it is an IP(e.g APP), no ICP is required.

## CEN
Then you can create the bridge between your AWS/Hong Kong Alibaba website instance by [CEN](https://www.alibabacloud.com/tc/product/cen)

## Result
When your user website China website/IP, their request and response will be proxy to Hong Kong Server via the CEN high speed route