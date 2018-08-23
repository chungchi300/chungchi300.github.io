---
title: Why we need to study data structure and algorithm,the answer is definitely not only Performance!
date: 2018-08-23 10:20:15
category: Program design
---

{% asset_img dsa.jpg %}

# Reason that we need to study data structure and algorithm

Because we want **Good data structure(more important then algorithm) and algorithm** improve the program

1. Readability
2. Maintainability
3. Performance

which can **significant reduce the development and maintenance cost**.In fact,if a program have **good data-structure**,normally people can understand the **70% of the program by just seeing the data structure**

# Prove

{% asset_img cover.jpg %}

## Funny analogies

Writing program is about **writing good story**.A **good data structure(Character design)** is determining **70% of the actual story**

## Bridget Jones's Diary

For example,let me give javascript object in 2 program to demonstrate what is **good data structure** of **good guy and bad guy(classical character from)** to make it more fun to read and write:).

```js
//Good guy,Colin Firth
{
  age: 30,
  name: "Colin Firth",
  hobby: "Reading",
  girlfriend: {
    name: "BJ",
    hobby:"wine and movie",
  }
}
```

```js
//bad guy,Hugh Grant
{
  age: 30,
  name:"Hugh Grant",
  hobby: (lady)=>lady.hobby,
  girlfriendsByName: {
    BJ:{
        name:"BJ",
        hobby:"wine and movie",
    },
    lucy:{
        name:"lucy",
        hobby:"photography",
    },
    angela:{
        name:"angela",
        hobby:"dancing",
    },
  }
}
```

In a good guy data-structure,it is definitely to see their is not possibility for cheating(multiple girlfriend) in his program.

In a bad guy data-structure,it is definitely to see their is possible for cheating(multiple girlfriend),and his program always need to find proper girlfriend by her name and he don't have actual hobby,his actual hobby change according to his girlfriend.

You see,I can guess **70%** of his **program(love story)** by just reading his **data structure!**

# What mean good data structure?

1. Informative
2. Easy manipulation
3. High Readability

# How to create good data structure?

- Now the definition of good data structure
- [Study common data structure](https://www.amazon.com/Solve-Computer-Prentice-Hall-International-Science/dp/0134340019)
- [Always prefer complexer data to represent knowledge of program: Rule of representation](https://en.wikipedia.org/wiki/Unix_philosophy),because human always remember and understand data structure then procedure,like you always remember Colin firth is a gentleman but easily forget the actual story of Bridget Jones's Diary

# Reference

[The Art of Unix Programming](https://www.amazon.com/UNIX-Programming-Addison-Wesley-Professional-Computing-ebook/dp/B003U2T5BA)
[Bridget Jones's Diary (film)](<https://en.wikipedia.org/wiki/Bridget_Jones%27s_Diary_(film)>)
