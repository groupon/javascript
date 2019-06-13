'use strict';

var $ = function() {
  return {};
};

var $div;

// jquery/no-filter
$('div').filter();
$div.filter();
$('div')
  .first()
  .filter();
$('div').append($('input').filter());
