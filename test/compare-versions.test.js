'use strict';
var assert = require('assertive');

var ROOT_PKG = require('../package.json');

var LINT_PKGS = [
  'groupon',
  'groupon-es5',
  'groupon-node4',
  'groupon-react',
].map(function (linter) {
  return require('../linters/eslint-config-' + linter + '/package.json');
});

describe('package.json#version', function () {
  it('matches across all packages', function () {
    var version = ROOT_PKG.version;
    LINT_PKGS.forEach(function (pkg) {
      assert.equal(pkg.name + '#version matches root version',
        version, pkg.version);
    });
  });
});
