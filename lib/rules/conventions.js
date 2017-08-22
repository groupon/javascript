'use strict';

/**
 * Rules in this file have good reasons but don't prevent bugs.
 *
 * If any of the rules in here can't be fixed, they should at most warn.
 * Not following conventions should not break builds, especially since they
 * might be a moving target.
 */
module.exports = {
  // See: http://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': ['warn', { allowAfterThis: true }],

  // See: http://eslint.org/docs/rules/no-undef-init
  'no-undef-init': 'error',

  // See: http://eslint.org/docs/rules/strict
  strict: ['warn', 'global'], // pending: Can't be auto-fixed

  // See: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
  'import/no-dynamic-require': 'warn', // pending: Can't be auto-fixed

  // See: https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // See: https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // See: https://eslint.org/docs/rules/no-var
  'no-var': 'error',
  // See: https://eslint.org/docs/rules/prefer-const
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  // See: https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',
};
