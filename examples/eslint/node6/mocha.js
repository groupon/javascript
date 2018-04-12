'use strict';

/* eslint-env mocha */

describe('various mocha mistakes', () => {
  // no-exclusive-tests
  it.only('does thing', done => {
    it('tries to nest a test'); // no-nested-tests
    return done; // no-return-and-callback, handle-done-callback
  });

  it('does thing'); // no-identical-title
});
