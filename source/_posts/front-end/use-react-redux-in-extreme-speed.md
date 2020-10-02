---
title: Use React-Redux for fastest rendering
date: 2020-10-2 10:20:15

category: Web Development
---

# 1. Background knowledge

1. In browser, the performance bottleneck normally is caused by **dom calculation/manipulation**.

# 2. Normal Case

{% asset_img normal-case.jpg %}

When redux represent single truth of source, developer first thinking is does it make the application slow? The answer is definitely not. React vdom calculation can ensure you application still fast enough but you can make your application move to **extreme fast level** but skip most of **vdom calculation**

## 2.1. MapStateToProps only when you need to

A subscribe to a
B subscribe to b list.

If a value change in redux,

A mapStateToProps get differentPropsAddress, vdom of A start,  
B mapStateToProps get samePropsAddress, vdom calculation skip

## 2.2. should component update with same props address(or pure function)

A subscribe to a
B subscribe to b list.

If b1 value change in redux,

A mapStateToProps get samePropsAddress, vdom calculation skip,
B1 mapStateToProps get different address, vdom calculation, but B2-1000 has same address, vdom calculation skip.

## 2.3. Selector Pattern(Lesser improvement)

If mapStateToProps involves lot of calculation(e.g B is a todo list, that only show visible todo), you can use https://github.com/reduxjs/reselect , which can memoize only when the related param change.
