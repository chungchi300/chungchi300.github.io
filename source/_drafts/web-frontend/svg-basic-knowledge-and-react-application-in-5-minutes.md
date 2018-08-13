---
layout: post
title: SVG基础知识和React上的应用 - 20分钟发挥svg的全部潜力
category: Web Development
keywords: SVG,React
date: 2018-04-28 16:09:02
---


## 什么是SVG？
矢量图形文件格式.[所有现代浏览器都支持svg](https://caniuse.com/#search=svg)

优点：

* 可以缩放到任何尺寸而不会失去清晰度
* 在视网膜显示器上看起来不错
* 可动态变更不同颜色和形状,容許强大的交互性
* 高压缩比

## 使用方法

### 图像元素
```
<img src="theImage.svg" />
```
![](/blog_accessary/blog_images/svg/address.svg)

适用的场景:
 * 不需要提供交互性

### 使用CSS动态变更颜色

#### 一种颜色

![](/blog_accessary/blog_images/svg/1.png)

**html中Inline(内联)使用**

HTML:
```
<svg id="mapSvg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
  <rect x="10" y="10" width="100" height="100"/>
</svg>


```
CSS:
```
  #mapSvg{
    fill:red;
  }
```

[点击试试](https://codepen.io/chungchi300/pen/GQZLbM)

P.S
* 使用svg sprite＆<use / >来提高可读性.
* svg 不要有fill否則不能overwrite


#### 2种颜色

![](/blog_accessary/blog_images/svg/2.png)


**html中Inline(内联)和在svg使用currentColor 属性**

适用的场景:
 * css selector已经足够动态变更颜色.

[点击试试](https://codepen.io/chungchi300/pen/RQamrL)

### 使用React(JS)动态变更多种(>2)颜色和用JS变更

![](/blog_accessary/blog_images/svg/sample.png)

[点击试试](https://codepen.io/chungchi300/pen/OQNYOB)

SVG 转 React Component 工具:

[SVGR](https://github.com/smooth-code/svgr)
