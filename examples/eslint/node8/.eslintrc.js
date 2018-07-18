'use strict';

module.exports = Object.assign({
  // Unfortunately overrides are only valid in project-level config...
  overrides: [
    {
      files: ['**/*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        'node/no-unsupported-features': [2, {
          version: '8.3.0',
          ignores: ['modules'],
        }],
      },
    },
  ],
}, require('../../../node8'));
