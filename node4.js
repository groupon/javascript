'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'script',
  },
  plugins: [
    'node',
  ],
  rules: {
    'node/no-unsupported-features': [2, { version: 4 }],
    'no-param-reassign': 0,
    'prefer-rest-params': 0,
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    strict: [2, 'global'],
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'never',
    }],
    'prefer-spread': 0,
  }
};
