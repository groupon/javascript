'use strict';

let x = undefined;
x = 42;
x = 13;
(() => {})(x); // "use"
