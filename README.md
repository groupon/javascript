[![nlm-github](https://img.shields.io/badge/github-groupon%2Fjavascript%2Fissues-F4D03F?logo=github&logoColor=white)](https://github.com/groupon/javascript/issues)
![nlm-node](https://img.shields.io/badge/node-%3E%3D10.13-blue?logo=node.js&logoColor=white)
![nlm-version](https://img.shields.io/badge/version-10.0.5-blue?logo=version&logoColor=white)
# JavaScript at Groupon

This repository contains tools & guidelines for using JavaScript at Groupon.
It represents the best effort to capture the current practices.

## Writing NPM Packages

### ES5 or ES2015?

The default lint style should be `groupon/nodeN` (e.g. `groupon/node4`),
depending on which node version is the minimal version targeted.

For client-side code we depend on `babel-preset-env` to ensure that both application-
and library code is compiled down to whatever our targeted browsers support.

### Versioning and Publishing

We use [`nlm`](https://github.com/groupon/nlm) to manage our libraries.
This ensures that:

1. Every library has a usable `CHANGELOG.md` file as part of its git history.
1. Releases are never tied to a single person.
1. We can easily share best practices across projects.

## Groupon JavaScript Style Guide

Fortunately there already is a great and well-documented style guide for JavaScript 
over at [airbnb/javascript](https://github.com/airbnb/javascript).
It definitely is worth a read and in many ways we're staying fairly close to it.

There's some important differences that are mostly around our focus on sticking to 
features natively supported by Node where possible, and a higher bar for rules that 
don't support `--fix`: If a rule isn't clearly preventing bugs, it has to support 
`--fix` to be enabled.

Additionally, our file naming convention is `kabab-case`.  File names should be entirely 
in lowercase to avoid any renaming issues with file systems.

Regarding code organization, we generally structure code by domain, not by layer 
(`todos/model.js` instead of `models/todo.js`).

To ensure good automation support, we're also dropping any rules that conflict with 
prettier's formatting.

### The Longer Answer

We split our rules into three categories:

* Mistakes: Things that should only appear because the developer made a mistake, 
99% of the time.
  If these errors aren't fixed, we wouldn't expect the program to work correctly.
  This is the only category where we allow "error" even for rules that don't support 
  `--fix`.
* Conventions: Points out patterns that we believe could lead to confusion or 
maintenance issues down the line.
  If a rule isn't fixable, there should be a high bar for it to be enabled to 
  not cause noise.
  Even if a rule is enabled, it may at most warn.
* Opinions: Things that are arbitrary choices. Most whitespace and formatting rules 
fall into this category.
  Everything in here must support `--fix` and shouldn't require human intervention.

## Groupon CoffeeScript Style Guide

We include a single coffeelint config module - it allows globals appropriate for ES6, Mocha, and Node coding.
