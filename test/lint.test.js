'use strict';

/* eslint-env mocha */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const globby = require('globby');
const CLIEngine = require('eslint').CLIEngine;

const readFile = promisify(fs.readFile);

async function validate(filename, content) {
  const cliEngine = new CLIEngine({
    cwd: path.dirname(path.resolve(filename)),
    fix: true,
    ignore: false,
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
    assert.strictEqual(first.errorCount, expected.errorCount);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(first.messages, expected.messages);
    throw e;
  }

  let expectedSource;
  try {
    expectedSource = await readFile(
      filename.replace(/(\.\w+$)/, '.out$1'),
      'utf8'
    );
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
    expectedSource = content;
  }

  assert.strictEqual(first.output || content, expectedSource);
}

describe(`Linting using ESLint`, () => {
  const files = globby.sync(`examples/**/*.{mjs,js,ts,jsx}`);

  files.forEach(testFile => {
    describe(testFile, () => {
      it('matches the expectations', async function () {
        this.timeout(15000); // sometimes booting linters is slow
        const content = await readFile(testFile, 'utf8');
        return validate(testFile, content);
      });
    });
  });
});
