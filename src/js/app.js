var $ = require('jquery');

require('./objects.js');

var components = [
  require('./components/board.js'),
  require('./components/slideshow.js')
];

$(document).ready(() => {
  components.forEach(m => m.init());
});