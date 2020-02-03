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
 * Only things we are pretty sure are mistakes
 *
 * There should be a fairly high bar to end up in this list unless the issue
 * can be fixed automatically. It's expected that each rule comes with a
 * documented (class of) bug it prevents.
 */
module.exports = {
  // See: https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // See: https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'error',
  // See: https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'error',
  // See: https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': 'error',
  // See: https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // # RegExp
  // See: https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': 'error',
  // See: https://eslint.org/docs/rules/no-invalid-regexp
  'no-invalid-regexp': 'error',

  // # Debug & Refactor Leftovers

  // See: https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'error',
  // See: https://eslint.org/docs/rules/no-empty
  'no-empty': 'error',
  // See: https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',
  // See: https://eslint.org/docs/rules/no-unreachable
  'no-unreachable': 'error',
  // See: https://eslint.org/docs/rules/no-unexpected-multiline
  'no-unexpected-multiline': 'error',
  // See: https://eslint.org/docs/rules/constructor-super
  'constructor-super': 'error',
  // See: https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',
  // See: http://eslint.org/docs/rules/require-yield
  'require-yield': 'error',
  // See: https://eslint.org/docs/rules/no-compare-neg-zero
  'no-constant-condition': 'error',
  // See: https://eslint.org/docs/rules/no-console
  'no-console': 'error',

  // # Types & Misleading Syntax

  // See: https://eslint.org/docs/rules/use-isnan
  'use-isnan': 'error',
  // See: https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'off',
  // See: https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'error',

  // See: https://eslint.org/docs/rules/no-new-require
  'no-new-require': 'error',
  // See: https://eslint.org/docs/rules/no-new-symbol
  'no-new-symbol': 'error',

  // See: https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // See: https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // # Variables & Assignment

  // See: https://eslint.org/docs/rules/no-func-assign
  'no-func-assign': 'error',
  'no-class-assign': 'error',
  'no-const-assign': 'error',

  // See: https://eslint.org/docs/rules/no-self-assign
  'no-self-assign': 'error',

  // See: https://eslint.org/docs/rules/no-unused-vars
  'no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],

  // See: https://eslint.org/docs/rules/no-use-before-define
  'no-use-before-define': [
    'error',
    // Disable functions because there *are* valid reasons to do it and can't be auto-fixed
    { functions: false, classes: true, variables: true },
  ],

  // See: https://eslint.org/docs/rules/no-undef
  'no-undef': 'error',

  // See: https://eslint.org/docs/rules/no-shadow
  'no-shadow': 'error',

  // See: https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // See: https://eslint.org/docs/rules/no-delete-var
  'no-delete-var': 'error',

  // See: https://eslint.org/docs/rules/no-catch-shadow
  'no-catch-shadow': 'off',

  // See: https://eslint.org/docs/rules/no-ex-assign
  'no-ex-assign': 'error',

  // See: https://eslint.org/docs/rules/consistent-return
  'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],

  // # Dependencies & Imports

  // See: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

  // Doesn't know about devDeps properly
  // See: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
  'node/no-unpublished-require': 'off',

  // Doesn't allow for ./scripts/blah
  // See: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
  'node/shebang': 'off',

  // See: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/*.test.{js,jsx}', // repos with inline test files
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*.{test,spec}.{js,jsx}', // tests where the extension denotes that it is a test
        '**/jest.config.js', // jest config
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
        '**/rollup.config.js', // rollup config
        '**/rollup.config.*.js', // rollup config
        '**/gulpfile.js', // gulp config
        '**/gulpfile.*.js', // gulp config
        '**/Gruntfile{,.js}', // grunt config
        '**/protractor.conf.*.js', // protractor config

        // Allow script & example files
        'scripts/**',
        'tasks/**',
        'examples/**',
        'example/**',
      ],
      optionalDependencies: true, // allow optional deps to be required
    },
  ],
  // See: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'import/no-duplicates': 'error',

  // # Mocha

  // See: https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/handle-done-callback.md
  'mocha/handle-done-callback': 'error',
  // See: https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md
  'mocha/no-exclusive-tests': 'error',
  // See: https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-tested-tests.md
  'mocha/no-nested-tests': 'error',
  // See: https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-return-and-callback.md
  'mocha/no-return-and-callback': 'error',
};
