'use strict';

function foo() {}

const someVal = 42;
const okFor = 88;

const thisIs = { okFor: someVal };
const thisIsNot = { okFor: okFor };

foo(thisIs, thisIsNot);
