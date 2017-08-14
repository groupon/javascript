'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const globby = require('globby');
const CLIEngine = require('eslint').CLIEngine;

const GROUPS = [
  { type: 'coffee' },
  { type: 'css' },
  {
    type: 'js',
    validate(filename, content) {
      const cliEngine = new CLIEngine({
        cwd: path.dirname(path.resolve(filename)),
        fix: true,
      });
      const report = cliEngine.executeOnText(content, path.basename(filename));
      const first = report.results[0];

      let expected = { errorCount: 0 };
      try {
        expected = JSON.parse(fs.readFileSync(filename + '.json', 'utf8'));
      } catch (e) {
        if (e.code !== 'ENOENT') throw e;
      }

      assert.equal(first.errorCount, expected.errorCount);

      let expectedSource;
      try {
        expectedSource = fs.readFileSync(filename.replace(/(\.\w+$)/, '.out$1'), 'utf8');
      } catch (e) {
        if (e.code !== 'ENOENT') throw e;
        expectedSource = content;
      }

      assert.equal(expectedSource, first.source || content);
    },
  },
];

GROUPS.forEach((group) => {
  const validate = group.validate;

  describe(`Linting ${group.type}`, () => {
    const files = globby.sync(`examples/**/*.${group.type}`, {
      ignore: 'examples/node_modules/**/*.*',
    });

    files.forEach((testFile) => {
      describe(testFile, () => {
        if (!validate) {
          it('matches the expectations');
          return;
        }

        it('matches the expectations', () => {
          const content = fs.readFileSync(testFile, 'utf8');
          validate(testFile, content);
        });
      });
    });
  });
});
