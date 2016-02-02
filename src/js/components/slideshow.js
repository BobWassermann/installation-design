var Component = require('./component.js');
var slick = require('slick-carousel');
var socket = io.connect('http://localhost:3000');

class Slideshow extends Component {
  constructor(element, $) {
    super();
    this.$element = $(element);
    this.getContent();

    setInterval(() => {
      this.updateReel();
    }, 100);

    socket.on('buttonPrev', function (data) {
      if ( data === true ) {
        this.$element.slick('slickPrev');
      }
    });

    socket.on('buttonNext', function (data) {
      if ( data === true ) {
        this.$element.slick('slickNext');
      } 
    });

  }

  getContent() {
    var ObjectMarkup = '';
    Object.keys(Objects).forEach(function(key) {
      ObjectMarkup += `<div class="slide">
                        <div class="model" style="background-image: url(./src/img/` + Objects[key].name.toLowerCase() + `/1.png)"></div>
                        <h1>` + Objects[key].name + `</h1>
                        <p>` + Objects[key].text + `</p>
                      </div>`;
    });
    this.$element.append(ObjectMarkup);
    this.initSlick();
    this.updateReel();
  }

  updateReel() {
    var oldImage = this.$element.find('.slick-current .model')[0].style.backgroundImage;
    var newImageLink;
    var slickCurrentSlide = this.$element.find('.slick-current .model');
    socket.on('potentiometer', function (data) {
      var newImage = oldImage.replace(/\d+.png/g, data + '.png');
      newImageLink = newImage.replace(/\http:\/\/localhost:\d+\//, './');
      slickCurrentSlide.css('background-image', newImageLink);
    });
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