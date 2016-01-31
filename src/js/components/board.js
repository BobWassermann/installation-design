var Component = require('./component.js');
var socket = io.connect('http://localhost:3000');

class Board extends Component {
  constructor(element, $) {
    super();

    var potentiometerDataLcl;

    socket.on('potentiometer', function (data) {
      potentiometerDataLcl = data;
    });

    socket.on('buttonPrev', function (data) {
      if ( data === true ) $('#slideshow').slick('slickPrev');
    });

    socket.on('buttonNext', function (data) {
      if ( data === true ) $('#slideshow').slick('slickNext');
    });

    window.potentiometerData = potentiometerDataLcl;

  }

}

Board.selector = 'body';
module.exports = Board;