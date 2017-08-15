'use strict';

/**
 * Reasonable defaults for most lint settings
 */
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'script',
  },
  plugins: ['import', 'node', 'prettier'],
};
