---
title: Core design of nestjs
date: 2019-07-24 10:28:44
category: Program design
---

# Purpose
Make easy manageable(easy **read/write/scope limited**) dependency injection.

# Tool&Concept
## Basic
Provider: Component(Services) that inject things to dependency, or injectable to other provider
Controller: Injectable to other provider(easy to read)(actually it can inject thing but kind of anti-pattern)

## Advance
Module: Combination of Provider and controller that allows **internal injection** and controlled export inject names space.


# Best example

Module imports: DB,USER (for internal usage)
Providers: AuthService,JWT Service
Controller: AuthController
Module exports: AuthService(The consumer only have the auth service available, not the user service)


# PS
Since I am more advanced that once I use new framework I should directly look into its core.