'use strict';

function fn() {}

async function loop() {
  for await (const x of [5]) {
    fn(x);
  }
}
loop();
