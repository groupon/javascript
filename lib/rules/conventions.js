'use strict';

/**
 * Rules in this file have good reasons but don't prevent bugs.
 *
 * If any of the rules in here can't be fixed, they should at most warn.
 * Not following conventions should not break builds, especially since they
 * might be a moving target.
 */
module.exports = {
  /*
   * See: http://eslint.org/docs/rules/no-underscore-dangle
   */
  'no-underscore-dangle': ['warn', { allowAfterThis: true }],

  /*
   * See: http://eslint.org/docs/rules/no-undef-init
   */
  'no-undef-init': 'error',

  /*
   * See: http://eslint.org/docs/rules/strict
   */
  strict: ['warn', 'global'], // pending: Can't be auto-fixed

  /*
   * See: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
   */
  'import/no-dynamic-require': 'warn', // pending: Can't be auto-fixed
};
