---
title: Why develop grapthql,and the plan to implement in your web application when your application is supporting REST
date: 2018-05-23 10:20:15
tags:
category: Web depevelopment
---


# What is the problem we are facing and what 
Critical problem **Over-fetching & Too many round trip of api network layer**

* [Why GraphQL is the future – Apollo GraphQL](https://dev-blog.apollodata.com/why-graphql-is-the-future-3bec28193807

# Relation

## GrapthQL Scope and testing online

[By compare and contrast the rest api on github](https://developer.github.com/v4/guides/migrating-from-rest/)

[Query](https://graphql.org/learn/queries)
[Pagination](https://graphql.org/learn/pagination/)
[Automatic Aggregation](https://stackoverflow.com/questions/34321688/can-graphql-return-aggregate-counts)

## Server Implementation

[Simplest](https://github.com/hemanth/graphql-demo)

### Resolve Helper(Create 80% of your resolver)
[graphql + sequelize(an orm) ](https://github.com/mickhansen/graphql-sequelize)
[Grapthql + PostgreSQL](https://github.com/graphile/postgraphile)

P.S

* GraphQL's strength is that it gives the frontend more power in determining what data specifically is returned. **Some of what you write in GraphQL will be the same as what you would write for a REST API**.

## Client implementation

[Apollo Client](https://www.apollographql.com/docs/react/)
[Learn Relay](https://www.learnrelay.org/) 

P.S
* Grapth QL client are mostly sacrificing the predictable state change for simply api usage,I think they don't match the product requirement(for complex front end application,**predictable state change** is very important). I prefer using **redux-api-middleware** to call the **grapthql api**

# Execution

* Develop the **query design** for application
* **Implement** the grapthql api
* Make front end application to use grapthql api

# Verify improvement
* For grapthql api,define unit test for grapthql api
* End to End test for front end application that utilize grapthql api
