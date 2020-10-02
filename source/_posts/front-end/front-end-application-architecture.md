---
title: Front End Application Architecture & How React&Redux Solve It
date: 2020-10-02 10:20:15
tags:
category: Web Development
---

# 1. Problem we have for front end application

Since we have lot of API calling, that's why all application naturally have **Async&Mutation** property by default which is naturally hard to write but after we choose proper architecture to separate them, we can manage the complexity of program linearly.

By default, we mark **Async&Mutation** as 100(100 for most, 0 for easier to read&write).

# 2. Redux=>Separate the async&mutation

Redux has **synchronous** action&reduce + three principle

1. Single source of truth.
2. Reducer are pure function
3. State are read only, only changeable by reducer

help us know

1. when/how/why we change the application state
2. make the **Async&Mutation=>Async + Mutation**(50).

and redux by default don't directly handle the **async(async itself can be complicated)**, it just outsource it by **middleware**.

# 3. Redux middleware=>Make async easier

1. Thunk(Easy to understand&Easy to use)
2. Saga(Extensible & For complex Async Logic)
3. Rxjs(Powerful)

Finally we have **Async&Mutation=>High Readability&Writable Async + Mutation**(20).

# 4. React

React is just a view library that's can use with redux, and the `react-redux` happens to be very efficient to use with redux. Please check this
