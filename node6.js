'use strict';

const basics = require('./lib/basics');

const opinions = require('./lib/rules/opinions');
const conventions = require('./lib/rules/conventions');
const mistakes = require('./lib/rules/mistakes');

module.exports = Object.assign(basics, {
  rules: Object.assign({}, opinions, conventions, mistakes, {
    // Additional opinions

    // Additional conventions

    // Additional mistakes
    'node/no-unsupported-features': [2, { version: 6 }],
  })
});
