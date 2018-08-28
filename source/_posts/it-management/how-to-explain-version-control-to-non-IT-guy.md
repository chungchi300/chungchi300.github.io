---
title: How to explain Version control(git,svn) for non-IT guy
date: 2018-08-28 10:20:15
? tags
category: 管理和协作
---

# Analogy

{% asset_img cover.jpg %}

1. Software is Movie
2. Programmers are the screenwriters
3. Programmer write source code(Screenwriter write scripts)

# Movie Script Management

Screenwriter write their script in their computer using `MS word` or `Text Editor`.However it's dangerous when their computer break-down and causing the **script lost**.They also want to **share script** they written or **collaborative write script**.

Therefore,they backup their script by uploading them to **remote hard disk(like google drive)**.Like `Revenger 3 - 20-5-2017.doc`,`Revenger 3 - 22-5-2017.doc`.

# Source code management

{% asset_img git.gif %}

The programmers also need to do the same thing but their tool **is more advanced**,they called is `version control`.They use tool like `git,svn`(your local google drive synchronization tool) and service provider like `github,bitbucket`(just like google drive).

# The importance of version control

No version control is similar scenario that you as the movie producer,and your screenwriters **scripts** are

1. No backup,when their **computer broke down**,all your scripts will **be lost**.
2. **Extreme low collaboration efficiency** between screenwriters,screenwriters hard to know what other screenwriter script about **same story**,which lead to **terrible movie script and movie,just like terrible source code and software**

# Service provider

Some non-IT guy are strongly against using service provider like `github`.In fact they are more reliable option when you don't have dedicated IT team.

Using own `git server` is like using your `internal remote hard disk`.It is maintenance by your `internal team` which `lack of functions` and `not stable` when you don't have dedicated IT team.

Using own `github server` is like using your `google drive`.It is maintenance by your `google` which `pretty functions` and `very stable`
