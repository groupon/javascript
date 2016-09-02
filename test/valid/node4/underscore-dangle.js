'use strict';
function MyClass() {
  this._prop = 'totally private';
}
// setTimeout b/c no-unused-expressions
setTimeout(new MyClass());

class ES6Class {
  constructor() {
    this._prop = 'totally private';
  }
}
// setTimeout b/c no-unused-expressions
setTimeout(new ES6Class());
