'use strict';

module.exports = {
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'script',
  },
  plugins: [
    'node',
    'prettier',
  ],
  rules: {
    // Random stylistic choices
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5',
    }],
    'lines-around-directive': ['error', 'always'],

    // Code convention
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    // TODO: Make sure it will be auto-fixed
    'no-undef-init': 'error',

    // Bug prevention
    strict: [2, 'global'],
    'node/no-unsupported-features': [2, { version: 6 }],
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-func-assign': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'use-isnan': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-undef': 'error',
    'no-shadow': 'error',
    'no-label-var': 'error',
    'no-delete-var': 'error',
    'no-catch-shadow': 'off',
  }
};
