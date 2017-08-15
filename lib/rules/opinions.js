'use strict';

/**
 * Rules in this file are ultimately random choices.
 *
 * No human should have to type on a keyboard to comply.
 * If it can't be --fix'ed, it doesn't belong in here.
 */
module.exports = {
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      trailingComma: 'es5',
    },
  ],
  'lines-around-directive': ['error', 'always'],
  'import/newline-after-import': 'error',
};
