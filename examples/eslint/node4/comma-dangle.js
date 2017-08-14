'use strict';

function foo() { }

// no comma-dangle for functions
foo(
  1,
  2
);

// yes comma-dangle for arrays/objects
foo([
  1,
  2,
]);
foo({
  x: 1,
  y: 2,
});

// no comma-dangle for single-line arrays
foo([1, 2]);
foo({ x: 1, y: 2 });
