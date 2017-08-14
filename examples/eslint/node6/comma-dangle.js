'use strict';

function foo() {}

// no comma-dangle for functions
foo(
  'some very long argument to force line break',
  'another very long argument to force line break'
);

// yes comma-dangle for arrays/objects
foo([
  'some very long argument to force line break',
  'another very long argument to force line break',
]);
foo({
  x: 1,
  y: 2,
});

// no comma-dangle for single-line arrays
foo([1, 2]);
foo({ x: 1, y: 2 });
