'use strict';

const $ = function() {
  return {};
};
// jquery/no-show
$('div').show();
let $div;
$div.show();
$('div')
  .first()
  .show();
$('div').append($('input').show());
