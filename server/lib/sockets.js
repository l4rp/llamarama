function initListeners(io) {
    io.sockets.on('connection', function (socket) {
        console.log('socket.js: A socket connection has connected.');

        socket.on('test', function (data) {
           console.log('recieved:', data);
        });

    });
}

exports.initListeners = initListeners;