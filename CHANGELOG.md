### 8.1.1

* chore(deps): bump acorn from 7.1.0 to 7.1.1 - **[@dependabot[bot]](https://github.com/apps/dependabot)** [#43](https://github.com/groupon/javascript/pull/43)
  - [`289dab3`](https://github.com/groupon/javascript/commit/289dab330579637cfc0fe2144b1f39bf348a84f7) **chore:** bump acorn from 7.1.0 to 7.1.1 - see: [7](- [Commits](https://github.com/acornjs/acorn/compare/7)


### 8.1.0

* feat: update rules & packages - **[@aaarichter](https://github.com/aaarichter)** [#42](https://github.com/groupon/javascript/pull/42)
  - [`44bdfaf`](https://github.com/groupon/javascript/commit/44bdfaf6920e8a82996948657b6d717ceda8a942) **chore:** update / upgrade packages
  - [`af4f8c3`](https://github.com/groupon/javascript/commit/af4f8c3d8a723fd49f787923ba690642df408e6d) **feat:** add no-self-assign rule
  - [`c896339`](https://github.com/groupon/javascript/commit/c8963396a0ac29c13e2dffe37cd1c2018df73fd8) **fix:** set 8.5.0 as min required node version & adjust example


### 8.0.1

* turn off node shebang test - **[@dbushong](https://github.com/dbushong)** [#41](https://github.com/groupon/javascript/pull/41)
  - [`bacf7ca`](https://github.com/groupon/javascript/commit/bacf7caf3c1d9047692a877075efb671dd80c84b) **fix:** turn off node shebang test


### 8.0.0

#### Breaking Changes

/nodeN entrypoints are gone; you must specify a
`engines.node` section in your `package.json`; new defaults as specified
by adding `extends: plugin:node/recommended`; dropped support for node 6
and node 4 and es5

*See: [`a207b40`](https://github.com/groupon/javascript/commit/a207b40a5e5cab1ee74fe7d6dd343aed7773265d)*

#### Commits

* Complete refactor + Node 12.x (and beyond) support - **[@dbushong](https://github.com/dbushong)** [#40](https://github.com/groupon/javascript/pull/40)
  - [`20ce479`](https://github.com/groupon/javascript/commit/20ce4791f61d380a4011887b6ccdf70d8a53c454) **chore:** update the peerDeps
  - [`02a5a35`](https://github.com/groupon/javascript/commit/02a5a35f5aa10aad704d55800a73bab0d498e357) **chore:** check in package-lock
  - [`16297a4`](https://github.com/groupon/javascript/commit/16297a4b40d2196a50b764aaaae26878afae1049) **chore:** upgrade pkgs & builds
  - [`a207b40`](https://github.com/groupon/javascript/commit/a207b40a5e5cab1ee74fe7d6dd343aed7773265d) **feat:** support all versions automatically
  - [`6d3fd0f`](https://github.com/groupon/javascript/commit/6d3fd0f3161a18d7c53a8513b5a960f6bf20bea5) **fix:** tweak default node/* settings
  - [`55315c9`](https://github.com/groupon/javascript/commit/55315c94c343ca253245145ab3322663e0de6715) **test:** add negative test for node supported


### 7.2.1

* make peerDependencies looser - **[@dbushong](https://github.com/dbushong)** [#39](https://github.com/groupon/javascript/pull/39)
  - [`9e61ef3`](https://github.com/groupon/javascript/commit/9e61ef344224a82a0af43c9eeb62769e584ce303) **fix:** make peerDependencies looser


### 7.2.0

* add support for groupon/node10 - **[@dbushong](https://github.com/dbushong)** [#36](https://github.com/groupon/javascript/pull/36)
  - [`3be91a5`](https://github.com/groupon/javascript/commit/3be91a544b54dfd22cb549f11347695378bf3269) **feat:** add support for groupon/node10


### 7.1.0

* add object-shorthand as fixable error - **[@dbushong](https://github.com/dbushong)** [#35](https://github.com/groupon/javascript/pull/35)
  - [`e7a0496`](https://github.com/groupon/javascript/commit/e7a04967fc6f4b906f5de0a93db62d39e22c65b8) **feat:** add object-shorthand as fixable error


### 7.0.0

#### Breaking Changes

This config now builds on top of ESLint 5. This
also affects other `peerDependencies` like certain plugins.

*See: [`986105d`](https://github.com/groupon/javascript/commit/986105d0ca9595d9d79c8b717999481eb6fd4478)*

#### Commits

* Upgrade to ESLint 5 - **[@jkrems](https://github.com/jkrems)** [#32](https://github.com/groupon/javascript/pull/32)
  - [`986105d`](https://github.com/groupon/javascript/commit/986105d0ca9595d9d79c8b717999481eb6fd4478) **refactor:** Upgrade to ESLint 5


### 6.1.1

* consistent-return: allow implicit undefined - **[@dbushong](https://github.com/dbushong)** [#31](https://github.com/groupon/javascript/pull/31)
  - [`21b9ac3`](https://github.com/groupon/javascript/commit/21b9ac3ce66d9678d71874ef89899689ae100a2a) **fix:** consistent-return: allow implicit undefined


### 6.1.0

* add rule `consistent-return` - **[@dbushong](https://github.com/dbushong)** [#30](https://github.com/groupon/javascript/pull/30)
  - [`cea8c21`](https://github.com/groupon/javascript/commit/cea8c212eee48a5683a5fe532a6e8247714f531b) **feat:** add rule `consistent-return`


### 6.0.0

#### Breaking Changes

adds eslint-plugin-mocha as a peerDep

*See: [`897dbb0`](https://github.com/groupon/javascript/commit/897dbb015345977c40dcb5a8a5a6437a8627f51b)*

#### Commits

* add mocha lint checks - **[@dbushong](https://github.com/dbushong)** [#29](https://github.com/groupon/javascript/pull/29)
  - [`897dbb0`](https://github.com/groupon/javascript/commit/897dbb015345977c40dcb5a8a5a6437a8627f51b) **feat:** add mocha lint checks


### 5.4.2

* docs: update file naming and organization - Closes #7 - **[@markowsiak](https://github.com/markowsiak)** [#28](https://github.com/groupon/javascript/pull/28)
  - [`6593962`](https://github.com/groupon/javascript/commit/65939628e36ffe7c6896bb6febe2e8d3eb890719) **docs:** update filenaming and organization - Closes #7 - see: [#7](https://github.com/groupon/javascript/issues/7)


### 5.4.1

* Do not prefer arrow for ES5 - **[@jkrems](https://github.com/jkrems)** [#27](https://github.com/groupon/javascript/pull/27)
  - [`380f1ae`](https://github.com/groupon/javascript/commit/380f1ae7729b9e8c519fb2315f17b0004fedc87a) **fix:** Do not prefer arrow for ES5


### 5.4.0

* resurrect prefer-arrow-callback - **[@dbushong](https://github.com/dbushong)** [#26](https://github.com/groupon/javascript/pull/26)
  - [`7de330c`](https://github.com/groupon/javascript/commit/7de330cb724553d9686426e99786f0bf5f1fcccb) **feat:** resurrect prefer-arrow-callback


### 5.3.0

* apply === rule with null expection - **[@dbushong](https://github.com/dbushong)** [#25](https://github.com/groupon/javascript/pull/25)
  - [`c727390`](https://github.com/groupon/javascript/commit/c72739026db07af40b79849a1f80ef7082984f3c) **feat:** apply === rule with null expection


### 5.2.1

* Apply latest nlm generator - **[@markowsiak](https://github.com/markowsiak)** [#24](https://github.com/groupon/javascript/pull/24)
  - [`c6a3316`](https://github.com/groupon/javascript/commit/c6a3316472d23ce6ca801c09ef4a4230dd496c07) **chore:** apply latest generator


### 5.2.0

* resurrect `no-console` as `error` - **[@dbushong](https://github.com/dbushong)** [#23](https://github.com/groupon/javascript/pull/23)
  - [`f66914e`](https://github.com/groupon/javascript/commit/f66914e8b3770d6c2538cb2af1a41cf19ee1b22c) **feat:** resurrect `no-console` as `error`
  - [`57a5ff9`](https://github.com/groupon/javascript/commit/57a5ff94e63fe99e8d60174228779d583eace481) **chore:** add nvmrc for node8 dev compliance


### 5.1.1

* fix: set prefer-template to off for es5 - **[@markowsiak](https://github.com/markowsiak)** [#22](https://github.com/groupon/javascript/pull/22)
  - [`fb601e6`](https://github.com/groupon/javascript/commit/fb601e612117e262695386ab40f0cc63a15aaac1) **fix:** set prefer-template to off for es5


### 5.1.0

* feat: support object spread and mjs - **[@jkrems](https://github.com/jkrems)** [#21](https://github.com/groupon/javascript/pull/21)
  - [`344fe64`](https://github.com/groupon/javascript/commit/344fe6447c9b284d7d6edb7e088d98ae59342e33) **feat:** support object spread and mjs


### 5.0.0

#### Breaking Changes

This switches our linting to an entirely new
set of rules. For the most part we're trying to stay consistent
with the old format to reduce churn but it explicitly is a departure.

*See: [`559c99f`](https://github.com/groupon/javascript/commit/559c99f6d3c153ca13d78aaed164a7a73e3c48e7)*

#### Commits

* Simplify package structure and decouple from Airbnb - **[@jkrems](https://github.com/jkrems)** [#20](https://github.com/groupon/javascript/pull/20)
  - [`559c99f`](https://github.com/groupon/javascript/commit/559c99f6d3c153ca13d78aaed164a7a73e3c48e7) **refactor:** Drop dependency on lerna & airbnb
  - [`98ce778`](https://github.com/groupon/javascript/commit/98ce778b0ded4438f10461f4b7d519e55a8c8eba) **feat:** Add prettier for node 6 config
  - [`15b1ec6`](https://github.com/groupon/javascript/commit/15b1ec6ec3b386fe399c3287e3cac61d4d3209f9) **feat:** Bring back basic bug prevention rules
  - [`5c3d500`](https://github.com/groupon/javascript/commit/5c3d500b33717beb0f2decbbbd7c321786d4c6dc) **fix:** Use proper import syntax
  - [`f849bdc`](https://github.com/groupon/javascript/commit/f849bdcee338a835f2b5006c203144be53cd4b7d) **feat:** Add import checks
  - [`366813b`](https://github.com/groupon/javascript/commit/366813bc72b71b9fe3a2bb12f83f766921e80f3a) **fix:** Add missing test file pattern
  - [`94d539c`](https://github.com/groupon/javascript/commit/94d539c48aad5de230301e5489e31cc18566f526) **refactor:** Run tests on node 8
  - [`f898741`](https://github.com/groupon/javascript/commit/f898741f09ef28f74c5b862334feb1118dcefa6f) **refactor:** Reuse rule list
  - [`1396cb1`](https://github.com/groupon/javascript/commit/1396cb18d1d2a08fa35bb0d57742d4b999fedaaf) **test:** Verify ES5 vs. ES6 behavior
  - [`5eff6a0`](https://github.com/groupon/javascript/commit/5eff6a053f1c9b032a2808d30b40b3da422dd172) **test:** Enable coffee tests
  - [`ef674e4`](https://github.com/groupon/javascript/commit/ef674e431544a0ef247c3a8f1315de2af5c617b3) **feat:** Bring back style linting
  - [`c42aeb7`](https://github.com/groupon/javascript/commit/c42aeb7213795f96ea9de14cc1d06a061c57d35d) **fix:** Add more --fix test cases
  - [`f4d8eb6`](https://github.com/groupon/javascript/commit/f4d8eb69593c8c94a6bf6a2bd78a7f1801a4452d) **test:** Add test case of newline after import
  - [`f9cdaaf`](https://github.com/groupon/javascript/commit/f9cdaafa737eee65a9743b40bdc1dfd4f5859ab4) **docs:** Add links to opinion rules
  - [`ff1ddca`](https://github.com/groupon/javascript/commit/ff1ddca281790b84cd2822cb057ad3635e5b1087) **fix:** Remove console.log
  - [`38d19d3`](https://github.com/groupon/javascript/commit/38d19d3998353cef2248c3c611647baee40114f8) **style:** Self-lint with latest deps
  - [`6dc9135`](https://github.com/groupon/javascript/commit/6dc9135e1d5ef3f7280a056bc22f2ed956ef27b6) **fix:** Lint self for node 4
  - [`74df77c`](https://github.com/groupon/javascript/commit/74df77c63147ea18754c7b8f41ed3ff9877326de) **docs:** Update readme with updated overview
  - [`decdae0`](https://github.com/groupon/javascript/commit/decdae0c02340c8f6a03cd3be918595d0629ed27) **docs:** Elaborate on rule categories
  - [`b8c7123`](https://github.com/groupon/javascript/commit/b8c71238e8722d1f72147f8b9f92084ce36da272) **chore:** Include stylint config in package
  - [`7951d90`](https://github.com/groupon/javascript/commit/7951d90b874f18fc9edbd988a8ee17dba66ff12b) **feat:** Port more airbnb rules
  - [`7041f12`](https://github.com/groupon/javascript/commit/7041f121035b67d6b15c9d38c1ab83d3776da745) **feat:** Cover more variable conventions
  - [`3a93a0c`](https://github.com/groupon/javascript/commit/3a93a0c0b249c12263513fcc6632b87ee127abad) **chore:** Add nlm & license headers
  - [`3a9e573`](https://github.com/groupon/javascript/commit/3a9e5735f302a581a8d1bbdfc8f576c6d68ff1e0) **chore:** Ignore package-lock.json since it's not stable
  - [`2952567`](https://github.com/groupon/javascript/commit/2952567090982a54af18f95646ea3c22cc98b9ed) **chore:** Rename and clean up dependencies
  - [`64630f8`](https://github.com/groupon/javascript/commit/64630f802ff3a0da665c065460d3b91b4a1af0be) **refactor:** Back out coffee & stylus linting
  - [`4d86376`](https://github.com/groupon/javascript/commit/4d863762efc21e3e843cd29de0afb3875a9b20ff) **chore:** Apply latest generator
  - [`4270b97`](https://github.com/groupon/javascript/commit/4270b97bd791cc8c6a09e27c8264256b1d80866f) **docs:** Clarify our lack of compliance with airbnb
