var Component = require('./component.js');
var SerialPort = require("browser-serialport").SerialPort
var serialPort = new SerialPort("/dev/cu.usbmodem1421", {
  baudrate: 57600
});

class Board extends Component {
  constructor(element, $) {
    super();

    serialPort.on("open", function () {
      console.log('open');
      serialPort.on('data', function(data) {
        console.log('data received: ' + data);
      });
      serialPort.write("ls\n", function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
      });
    });

  }

}

Board.selector = 'body';
module.exports = Board;