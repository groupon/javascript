'use strict';

function f() {
  const x = 42;
  return `The number is ${x}`;
}

f(/a {3}b/);
