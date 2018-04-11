/*
 * Copyright (c) 2015, Groupon, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 *
 * Neither the name of GROUPON nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

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

  // See: https://eslint.org/docs/rules/prefer-arrow-callback
  'prefer-arrow-callback': 'error',

  // See: https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-identical-title.md
  'mocha/no-identical-title': 'warn',
};
