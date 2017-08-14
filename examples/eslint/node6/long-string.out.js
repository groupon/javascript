'use strict';

const x = 'a string that is almost as long as the line will not force a break';

const y =
  'a string that is even longer than the entire line, making it impossible to fit it into one line';

(() => {})(x, y); // force used
