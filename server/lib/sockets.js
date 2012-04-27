var sockets = require('socket.io');

sockets.io.on('connection', function (socket) {
    console.log('socket.js: A socket connection has connected.');

    socket.on('test', function (data) {
       console.log('recieved:', data);
    });

});

export.sockets = sockets;