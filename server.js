var express        = require('express');  
var app            = express();  
var httpServer = require("http").createServer(app);  
var five = require("johnny-five");  
var io=require('socket.io')(httpServer);
 
var port = 3000;

const potentiometer__pin = 0;
const buttonPrev__pin = 4;
const buttonNext__pin = 2;
 
app.use(express.static(__dirname + '/public'));
 
app.get('/', function(req, res) {  
  res.sendFile(__dirname + '/public/index.html');
});
 
httpServer.listen(port);  
console.log('Server available at http://localhost:' + port);
 
//Arduino board connection
 
var board = new five.Board();  
board.on("ready", function() {  
    console.log('Arduino connected');
    
    // Potentiometer
    var potentiometer = new five.Sensor({
      pin: potentiometer__pin
    });
    console.log('Potentiometer initialized');
    potentiometer.on('data', function() {
      var self = this.value;
      var potData = Math.round(five.Fn.map(self, 0, 1023, 0, 100));
    });

    // Button left
    var buttonPrev = new five.Button(buttonPrev__pin);
    console.log('Left button initialized');
    buttonPrev.on('press', function() {
    });

    // Button right
    var buttonNext = new five.Button(buttonNext__pin);
    console.log('Right button initialized');
    buttonNext.on('press', function() {
    });
});
 
//Socket connection handler
io.on('connection', function (socket) {  
    console.log(socket.id);
});
 
console.log('Waiting for connection');