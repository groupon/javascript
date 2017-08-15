'use strict';

const assert = require('assert');
const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const coffeelint = require('coffeelint');
const globby = require('globby');
const CLIEngine = require('eslint').CLIEngine;

const CoffeeConfig = require('../coffee');

const readFile = promisify(fs.readFile);
const execFile = promisify(childProcess.execFile);

const GROUPS = [
  {
    type: 'coffee',
    async validate(filename, content) {
      const lintErrors = coffeelint.lint(content, CoffeeConfig);
      assert.deepEqual([], lintErrors);
    },
  },
  { type: 'css' },
  {
    type: 'js',
    async validate(filename, content) {
      const cliEngine = new CLIEngine({
        cwd: path.dirname(path.resolve(filename)),
        fix: true,
      });
      const report = cliEngine.executeOnText(content, path.basename(filename));
      const first = report.results[0];

      let expected = { errorCount: 0 };
      try {
        expected = JSON.parse(await readFile(`${filename}.json`, 'utf8'));
      } catch (e) {
        if (e.code !== 'ENOENT') throw e;
      }

      try {
        assert.equal(first.errorCount, expected.errorCount);
      } catch (e) {
        console.log(first.messages, expected.messages);
        throw e;
      }

      let expectedSource;
      try {
        expectedSource = await readFile(filename.replace(/(\.\w+$)/, '.out$1'), 'utf8');
      } catch (e) {
        if (e.code !== 'ENOENT') throw e;
        expectedSource = content;
      }

      assert.equal(expectedSource, first.output || content);
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

        it('matches the expectations', async () => {
          const content = await readFile(testFile, 'utf8');
          return validate(testFile, content);
        });
      });
    });
  });
});
