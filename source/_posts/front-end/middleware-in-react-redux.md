---
title: Use React-Redux for fastest rendering
date: 2020-10-2 10:20:15

category: Web Development
---

middleware is

1. a function
2. with store,next,action variable

# Thunk

```javascript
export const thunk = (store) => (next) => (action) => {
  if (typeof action == "function") {
    let actionAsFunc = action;
    return action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};
```

Usage

```javascript
function login() {
  return (dispatch, getState) => {
    dispatch(xx);
    let user = getState().user;
    console.log({ user });
  };
}
```
