// Requires
var Masonry = require('masonry-layout');
require('./components/scrollbar.js');

// Calls
var msnry = new Masonry('.card-container', {
  percentPosition: true,
  columnWidth: '.card__half',
  gutter: '.gutter-sizer'
});