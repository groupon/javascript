'use strict';

var x = 42;

function f() {
  if (x == 42) f(); // should be the only invalid use
  if (x === 42) f();
  if (x == null) f();
  if (x === null) f();
}
f();
