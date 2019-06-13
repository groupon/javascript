'use strict';

const $ = function() {
  return {};
};

let $div;

// jquery/no-filter
$('div').filter();
$div.filter();
$('div')
  .first()
  .filter();
$('div').append($('input').filter());
