---
title: Rest VS GRAPHQL
date: 2018-06-27 10:28:44
category: Program design
---

**Solution**

- **Special API - by backend developer** e.g
  - series/labelMap/?user
  - series/labelMap/?statisticalCountTotal=labelMap

Adv:

- Opportunity to optimize **specific** api
- More predictable api behavior

DisAdv:

- Require manual development
- lack of typing&Meta Data

**API that support specific queryLanguage**,e.g Grapth QL

Adv:

- Once development,most of special api don't need manual development
- Typing&Meta Data
- Good Discoverability

DisAdv:

- Naive implement of graphql may take many server resource
- Learning curve for both backend and frontend

**Summary**
In a facebook use case(Solve over-fetching & round tripping for **countless api and client application that use them**),graphql is a good place for them to solve their problem.And the discoverability & typing increase the development speed of api consumer.

If you organization only support **specific api and client application**,develop **special API - by backend developer** is still a good solution.
