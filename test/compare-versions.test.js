'use strict';
var assert = require('assertive');

var ROOT_PKG = require('../package.json');

var LINT_PKGS = [
  'coffeelint-config-groupon',
  'eslint-config-groupon',
  'eslint-config-groupon-es5',
  'eslint-config-groupon-node4',
  'eslint-config-groupon-node6',
  'eslint-config-groupon-react',
].map(function (linter) {
  return require('../linters/' + linter + '/package.json');
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
