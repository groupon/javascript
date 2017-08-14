'use strict';

module.exports = {
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

    // Bug prevention
    strict: [2, 'global'],
    'node/no-unsupported-features': [2, { version: 6 }],
  }
};
