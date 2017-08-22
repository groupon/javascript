'use strict';

/**
 * Rules in this file are ultimately random choices.
 *
 * No human should have to type on a keyboard to comply.
 * If it can't be --fix'ed, it doesn't belong in here.
 */
module.exports = {
  // See: https://github.com/prettier/eslint-plugin-prettier
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      trailingComma: 'es5',
    },
  ],

  // See: https://eslint.org/docs/rules/lines-around-directive
  'lines-around-directive': ['error', 'always'],

  // See: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
  'import/newline-after-import': 'error',

  // See: https://eslint.org/docs/rules/no-extra-semi
  'no-extra-semi': 'error',
};
