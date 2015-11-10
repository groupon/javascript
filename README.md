# JavaScript at Groupon

This repository contains tools & guidelines for using JavaScript at Groupon.
It represents a best effort to capture the current practices.

## Groupon JavaScript Style Guide

Fortunately there already is a great and well-documented style guide for JavaScript over at [airbnb/javascript](https://github.com/airbnb/javascript).
The short answer is: We stick to that.
There is no difference between the airbnb and the Groupon rules for anything but legacy mode.

### The Longer Answer

#### Generally

##### Short Identifiers

The airbnb config allows identifiers of any length.
This doesn't mean we encourage a bunch of `x` and `y`s over meaningful names.
But there a situations where short identifiers are perfectly reasonable.

Examples:
* Mathematical functions like `(a, b) => a + b`
* Known shorthands like `_` for lodash or underscore (especially in legacy mode where destructuring isn't available)

When writing or reviewing code the rule of thumb is "clarity over brevity".
But a linter isn't in the best position to judge clarity.

#### `groupon/legacy`

##### Strict Statements

We assume legacy mode is used to lint code that will be running on node.js without any compilation steps.
Which means we enforce a top-level `'use strict'` statement.

##### Param reassignment is allowed

Because ES5 has no way to specify default parameters,
we allow param reassignment.
The following is allowed:

```js
function f(options) {
  options = options || {};
}
```

This should be limited to default paramters.
The following will pass the linter but should be avoided:

```js
function f(filename) {
  filename = path.resolve(process.cwd(), filename);
}
```

##### `var` not forced to top

We encourage keeping declaration and initialization close to each other.
Which means the following is allowed:

```js
function f() {
  var x = calcX();
  if (x <= 0) {
    return 0;
  }
  var y = calcY();
}
```
