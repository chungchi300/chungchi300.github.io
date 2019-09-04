---
title: >-
  Enterprise level project management
date: 2019-09-24 10:28:21
category: Investment
---

```
                    high compound rate
* Implementation            |* Good Requirement
* CICD                      |* Good Program Design(good mental model)
                            |* Proper estimation
* Unit test                 |* Good Project management tool(show priority,complexity,dependency,resource required,impact)
* Good Test Case            |* Trust
                            |* Respect
                            |
                            |
Low <-------------------------------------------->high project,product and customer value
                            |* premature optimization
                            |* ui first and saying ui is the progress
                            |* dramatically increase expectation
                            |* finding an open source and said that is the project/product you need
                            |
                            |
                            |
                    low compound rate
```

# Estimation technique

## High Complexity

For high complexity like **solving complex algorithm, solving specific hardware issue and finding proper third party model**, we should

- allocate specific expert to it
- reference existing solution
- have an estimation task and a trial product(repo)
- put it to higher priority so that if it cost many time, you can adjust expectation and cooperate with other.

## Middle-Low Complexity

For task that has middle-low complexity and high-medium experience, we can break the task into sub task that only cost 1-2 days, so according to [Law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers) , you will get estimation that has only 5-10% error(deviation)

# Feature value evaluation in order to make good priority

| Possibility        | Priority 1          | Priority 2 | Priority 3          |
| ------------------ | ------------------- | ---------- | ------------------- |
| whether reasonable | feasible to provide | scenario   | intention to accept |
| whether can        | increase efficiency | lower cost | increase experience |

<!-- marketer focus -->
<!--               | whether exist       | market     | need                | customer | -->

# Template table

| id  | task                                                     | module  | people                                           | priority | Man day | Real Time used | Note                 | start date | End date | Deliverables  | Dependency |
| --- | -------------------------------------------------------- | ------- | ------------------------------------------------ | -------- | ------- | -------------- | -------------------- | ---------- | -------- | ------------- | ---------- |
| 1   | Design user entity, registration process and admin panel | Backend | product manager & backend developer              | high     | 2       | 2              |                      |            |          | api           |            |
| 2   | Design and develop front end interface                   | Web     | product manager & designer & front end developer | medium   | 1       | 2              | extra time due to xx |            |          | web interface | task 1     |
| 3   | Develop admin panel                                      | Admin   | front end developer                              | medium   | 1       | 1              |                      |            |          | web interface | task 1     |
