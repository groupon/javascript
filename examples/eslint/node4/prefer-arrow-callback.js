'use strict';

function a() {}

// uncomplicated callback: use arrow
const b = a().then(() => {
  const c = 42;
  return c;
});

// uses this?  use function
const d = a().then(function() {
  this.stuff();
});

// uses arguments?  use function
const e = a().then(function() {
  return arguments;
});

module.exports = [b, d, e];
