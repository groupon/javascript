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

  // See: https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'off',

  // See: https://eslint.org/docs/rules/no-compare-neg-zero
  'no-constant-condition': 'error',

  // See: https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'error',
  // See: https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'error',
  // See: https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': 'error',

  // # RegExp
  // See: https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': 'error',
  // See: https://eslint.org/docs/rules/no-invalid-regexp
  'no-invalid-regexp': 'error',
  // See: https://eslint.org/docs/rules/no-regex-spaces
  // TODO: Can't be auto-fixed
  'no-regex-spaces': 'off',

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

  // See: https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // See: https://eslint.org/docs/rules/use-isnan
  'use-isnan': 'error',

  // See: https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // # Variables & Assignment

  // See: https://eslint.org/docs/rules/no-func-assign
  'no-func-assign': 'error',

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

  // # Dependencies & Imports

  // See: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
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
};
