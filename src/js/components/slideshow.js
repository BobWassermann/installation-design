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
    setInterval(() => {
      var oldImage = this.$element.find('.slick-current .model')[0].style.backgroundImage;
      var newImage = oldImage.replace(/\d+.png/g, window.potentiometerData + '.png');
      var newImageLink = newImage.replace(/\http:\/\/localhost:\d+\//, './');
      this.$element.find('.slick-current .model').css('background-image', newImageLink);
      console.log(newImageLink);
    }, 50);
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