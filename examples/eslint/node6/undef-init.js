'use strict';

let x = undefined;
x = 42;
(() => {})(x); // "use"
