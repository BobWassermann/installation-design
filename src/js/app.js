var $ = require('jquery');
require('./objects.js');

var components = [
  require('./components/slideshow.js'),
  require('./components/board.js')
];

$(document).ready(() => {
  components.forEach(m => m.init());
});