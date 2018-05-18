'use strict';

(function x() {
  if (Math.random()) return true;
})();

(function y() {
  if (Math.random()) return void true;
})();
