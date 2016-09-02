'use strict';
function f() {
  const { x, y: z } = { x: 10, y: 20 };
  return { x, z };
}
f();
