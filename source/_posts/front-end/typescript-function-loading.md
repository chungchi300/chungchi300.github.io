---
title: Typescript Function Overloading
date: 2019-06-7 10:20:15
tags:
category: Web Development
---

# What is overloading

Overloading is executing of different function based on different parameter

# Typescript overloading

Typescript don't have real overloading. They are executing same function and it has multiple signature to achieve something that looks like overloading.

```js
//Example

hasPermission(role:string);
hasPermission(user:User);
hasPermission(roleOrUser){
    let role;
    if(typeof  roleOrUser  == 'string' ){
        role = roleOrUser;
    }else if(roleOrUser instanceof User){
        role = roleOrUser.role;
    }else{

    }
    if(role=='admin'){
        return true;
    }else{
        return false;
    }
}

```
