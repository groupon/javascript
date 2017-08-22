# JavaScript at Groupon

This repository contains tools & guidelines for using JavaScript at Groupon.
It represents a best effort to capture the current practices.

## Writing NPM Packages

### ES5 or ES2015?

The default lint style should be `groupon/nodeN` (e.g. `groupon/node4`),
depending on which node version is the minimal version targeted.

For client-side code we depend on `babel-preset-env` to ensure that both application-
and library code is compiled down to whatever our targeted browsers support.

### Versioning and Publishing

We use [`nlm`](https://github.com/groupon/nlm) to manage our libaries.
This ensures that:

1. Every library has a usable `CHANGELOG.md` file as part of its git history.
1. Releases are never tied to a single person.
1. We can easily share best practices across projects.

## Groupon JavaScript Style Guide

Fortunately there already is a great and well-documented style guide for JavaScript over at [airbnb/javascript](https://github.com/airbnb/javascript).
The short answer is: We stick to that.
There's some minor differences that are mostly around our focus on sticking to features natively supported by node where possible
and a higher bar for rules that don't support `--fix`:
If a rule isn't clearly preventing bugs, it has to support `--fix` to be enabled.

### The Longer Answer

*To be written.*

## Groupon CoffeeScript Style Guide

We include a single coffeelint config module - it allows globals appropriate for ES6, Mocha, and Node.JS coding.
