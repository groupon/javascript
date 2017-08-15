'use strict';

/**
 * Rules in this file have good reasons but don't prevent bugs.
 *
 * If any of the rules in here can't be fixed, they should at most warn.
 * Not following conventions should not break builds, especially since they
 * might be a moving target.
 */
module.exports = {
  'no-underscore-dangle': ['warn', { allowAfterThis: true }],
  'no-undef-init': 'off', // pending: Can't be auto-fixed
  'import/no-dynamic-require': 'off', // pending: Can't be auto-fixed
  strict: [2, 'global'],
};
