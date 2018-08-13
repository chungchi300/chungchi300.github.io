---
title: Program design guidance and code standard in a React project for intermediate developer for effective development
date: 2018-08-09 10:20:15
? tags
category: Web Development
---

{% asset_img cover.jpeg %}

# Design Principle

- [KISS](https://en.wikipedia.org/wiki/KISS_principle)
- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
  - single source of truth
  - no repeat code
- [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- [Open close principle](https://zh.wikipedia.org/wiki/%E5%BC%80%E9%97%AD%E5%8E%9F%E5%88%99)

# Implementation standard

## React Smart Component

```
class SeriesPage extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}
function mapStateToProps(){
...
}
function mapDispatchToProps(){
...
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SeriesPage`)
);
```

For more,please reference [blog](http://jeff-chung.com/2018/04/28/it-management/different-methodology-and-coding-structure-to-get-good-result-in-different-software.html)

## React dummy component

```
// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
```

For more,please reference [airbnb](https://github.com/airbnb/javascript/tree/master/react)
