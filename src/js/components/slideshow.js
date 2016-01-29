var Component = require('./component.js');
var slick = require('slick-carousel');

class Slideshow extends Component {
  constructor(element, $) {
    super();
    this.$element = $(element);
    this.getContent();
  }

  getContent() {
    var ObjectMarkup = '';
    Object.keys(Objects).forEach(function(key) {
      ObjectMarkup += '<div class="slide"><div class="model"></div><h1>' + Objects[key].name + '</h1><p>' + Objects[key].text + '</p></div>';
    });
    this.$element.append(ObjectMarkup);
    this.initSlick();
  }

  initSlick() {
    this.$element.slick({
      infinite: true,
      arrows: false
    });
  }

}

Slideshow.selector = '#slideshow';
module.exports = Slideshow;