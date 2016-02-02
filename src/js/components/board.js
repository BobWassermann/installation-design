var Component = require('./component.js');
var socket = io.connect('http://localhost:3000');

class Board extends Component {
  constructor(element, $, potentiometer) {
    super();

    socket.on('buttonPrev', function (data) {
      if ( data === true ) $('#slideshow').slick('slickPrev');
    });

    socket.on('buttonNext', function (data) {
      if ( data === true ) $('#slideshow').slick('slickNext');
    });

  }

}

console.log(window.potentiometerData);

Board.selector = 'body';
module.exports = Board;