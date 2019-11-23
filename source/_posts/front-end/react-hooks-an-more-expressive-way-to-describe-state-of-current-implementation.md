---
title: Review React State management strategy and how React Hooks Change it without any code
date: 2019-11-23 10:20:15
tags:
category: Web Development
---
![](https://i.imgflip.com/3hb3fq.jpg)
# React And the state
In a front end application, that's only have 2 thing, state and view. React is nothing but just a **efficient function**  to **convert state to vdom(dom)**. And state management strategy is always an important topic in react. Because how you manage your state effect 
1. The scope and modularity of state.
2. The performance of the rendering.

# Current State Management Strategy

## Redux
Global controlled state strategy that mutated by dispatcher pattern

The Controlling method is managed by 
Read - **mapStateToProps in redux connect(need explicitly declare it)**
Write - **Dispatcher pattern by action and reducer** 

## Context
Global controlled state strategy that mutated by function call

The Controlling method is managed by 
Read - **by provider(already in context for every element in the tree)**
Write - **function call** 

## State in component
Local state inside the react component that mutated by setState of component


# React Hooks
React Hooks is nothing but more an expressive way to implement above *three strategy*. Nothing very new.

React Hooks solve following pattern problem
1. Redux&Context - wrapper hell
2. State in component - the must to deal with *class syntax*

And the separate **highly related logic** into life cycle callback of the class.