---
title: How to implement in your web application when your application is supporting REST
date: 2018-08-14 10:20:15

category: Web Development
---

{% asset_img cover.jpeg %}

# Question

- What is the graphQL api model?
- How to describe the api and it's query ?
- How to implement a graphQL API server and how to implement the query?
- What is the common implementation of specific api problem?

# Relation

## Graphql API Model

Rest: Entities based api  
GraphQL: Tree based api

GraphQL is still

- **server-client** model
- **http protocol**
- **request body&response body** is **json**

## Description of API and it's query in graphQL

### Server

- API is a **tree(Graph)**.
- Each node correspond to a **field and it's argument**.

### Server api description language - Schema

The syntax is TypeScript like but looser

```javascript
  input bookFilter {
      id: ID
      title: String
      author: String
      isbn: String
      url: String
  }

  // The Actual GraphQL Tree
  type Query {
    # arguments filter for filter is just an convention
    allBook(filter: bookFilter): [Book!]!
  }

  type Mutation {
    createBook(title: String!, author: String!): Book
  }
```

### Client

- Our query is a tree-like query language which describe the data it's want based on server GraphQL API

### Client api query language - Query

Define fields and field parameter

```javascript
query {
  allBooks {
    author,
    title
  }
}
```

## GraphQL Documentation about common api problem

[Query](https://graphql.org/learn/queries)
[Pagination](https://graphql.org/learn/pagination/)
[Automatic Aggregation](https://stackoverflow.com/questions/34321688/can-graphql-return-aggregate-counts)

## GraphQL server and client implementation.

### Server

You need to build

1. **schema**
2. **resolver**
3. **Serve it as http api endpoint**

I suggest use [appollo-server](https://github.com/apollographql/apollo-server) as our tool to build things above,The following is the **simplest server demo**

[Simplest](https://github.com/hemanth/graphql-demo)

#### Schema Writing

[Online Schema and query playground](https://launchpad.graphql.com/zr173pnqx7),Online schema &query editor

#### Resolver development

##### Resolve Helper(Create 80% of your resolver automatically)

[graphql + sequelize(an orm) ](https://github.com/mickhansen/graphql-sequelize)
[Graphql + PostgreSQL](https://github.com/graphile/postgraphile)

P.S

- GraphQL's strength is that it gives the frontend more power in determining what data specifically is returned. **Some of what you write in GraphQL will be the same as what you would write for a REST API**.

### Client implementation

You need to build

1. **query**
2. **select proper query tool**
3. **query it using proper query tool**

#### Query Writing

[Online Schema and query playground](https://launchpad.graphql.com/zr173pnqx7),Online schema &query editor

#### Select proper Query Tool

[Apollo Client](https://www.apollographql.com/docs/react/)
[Relay](https://www.learnrelay.org/)
[Graphql-request](https://github.com/prismagraphql/graphql-request)

P.S

- Apollo Client & Relay are mostly sacrificing the predictable state change for simply api usage,(for complex front end application,**predictable state change** is very important). I prefer using **redux-api-middleware** && Graphql-request to call the **graphql api**

# Execution

- Develop the **Schema** for application
- **Implement** the graphql api in server side
- Develop the **Query** for client to query
- Front end application **implement** the **query of graphql**

# Verify improvement

- For graphql api,define unit test for graphql api
- End to End test for front end application that utilize graphql api

# Misc Tool

[GraphQL API to Static Pages](https://github.com/2fd/graphdoc),Generate API Doc
[Swagger to GraphQL](https://github.com/yarax/swagger-to-graphql),easy migrating from Rest
[Public GraphQL API](https://github.com/APIs-guru/graphql-apis),very strong community(facebook,github)
[Rest to graphql migration api on github](https://developer.github.com/v4/guides/migrating-from-rest/)
