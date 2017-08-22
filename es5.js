'use strict';

const opinions = require('./lib/rules/opinions');
const conventions = require('./lib/rules/conventions');
const mistakes = require('./lib/rules/mistakes');

module.exports = Object.assign({
  env: {
    es6: false,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  plugins: ['import', 'node', 'prettier'],
  rules: Object.assign({}, opinions, conventions, mistakes, {
    // Additional opinions

    // Additional conventions

    // Additional mistakes
    'node/no-unsupported-features': [2, { version: 4 }],
  }),
});
