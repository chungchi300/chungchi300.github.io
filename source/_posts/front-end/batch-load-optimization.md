---
title: Optimization of creating svg
date: 2018-05-23 10:20:15
tags:
category: 前端开发
---

## Performance record

Loading ~450 annotations

| Count | avg requestAnimationFrame time usage(ms) | Total Time(s) |
| ----- | ---------------------------------------- | ------------- |
| 1     | 50                                       | 13.462        |
| 3     | 65                                       | 11.802        |
| 5     | 73                                       | 11.917        |
| 10    | 114                                      | 10.881        |
| 20    | 230                                      | 10.959        |
