'use strict';

var $ = function() {
  return {};
};
// jquery/no-show
$('div').show();
var $div;
$div.show();
$('div')
  .first()
  .show();
$('div').append($('input').show());
