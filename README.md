# JavaScript at Groupon

This repository contains tools & guidelines for using JavaScript at Groupon.
It represents a best effort to capture the current practices.

## Writing NPM Packages

### ES5 or ES2015?

The general rule is:
When writing code that is distributed via npm, we use ES5 code.
All libraries should use `groupon/legacy`.
This ensures the code works consistently across all environments
and doesn't require any compilation.

There are exceptions when libraries depend on features like generators
that don't have a real ES5 equivalent.
But in most cases it's possible to isolate that code
into a separate library without polluting unrelated pieces of logic.

For applications using ES2015 and [proposed upcoming features](https://github.com/tc39/ecma262#ecmascript) like object spread is encouraged.
The default lint style should be `groupon/base` or `groupon` when using React.

### Versioning and Publishing

We use [`nlm`](https://github.com/groupon/nlm) to manage our libaries.
This ensures that:

1. Every library has a usable `CHANGELOG.md` file as part of its git history.
1. Releases are never tied to a single person.
1. We can easily share best practices across projects.

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
