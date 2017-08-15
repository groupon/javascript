'use strict';

/**
 * Only things we are pretty sure are mistakes
 *
 * There should be a fairly high bar to end up in this list unless the issue
 * can be fixed automatically. It's expected that each rule comes with a
 * documented (class of) bug it prevents.
 */
module.exports = {
  'no-debugger': 'error',
  'no-empty': 'error',
  'no-func-assign': 'error',
  'no-template-curly-in-string': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'use-isnan': 'error',
  'no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],
  'no-use-before-define': [
    'error',
    { functions: true, classes: true, variables: true },
  ],
  'no-undef': 'error',
  'no-shadow': 'error',
  'no-label-var': 'error',
  'no-delete-var': 'error',
  'no-catch-shadow': 'off',

  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
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
  'import/no-duplicates': 'error',
};
