'use strict';

/**
 * Rules in this file are ultimately random choices.
 *
 * No human should have to type on a keyboard to comply.
 * If it can't be --fix'ed, it doesn't belong in here.
 */
module.exports = {
  /**
   * Everything reported by prettier will be fixed by prettier.
   *
   * See: https://github.com/prettier/eslint-plugin-prettier
   */
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      trailingComma: 'es5',
    },
  ],

  /**
   * After 'use strict' there's a newline.
   *
   * See: https://eslint.org/docs/rules/lines-around-directive
   */
  'lines-around-directive': ['error', 'always'],

  /**
   * After the last require/import statement, there's a newline.
   *
   * See: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
   */
  'import/newline-after-import': 'error',
};
