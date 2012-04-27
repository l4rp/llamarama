var players = [];

function initListeners(io) {
  io.sockets.on('connection', function (socket) {
    
    socket.on('join', function (data) {
      socket.join(data.room);
      socket.set('room', data.room);
      console.log('Joined: ' + data.room);
      console.log(socket.namespace)
    });
    
    socket.on('setName', function (data) {
      console.log(data);
      socket.set('name', data.name, function () { 
        socket.emit('Name set to: ' + data.name); 
      });
    });
    
    socket.on('clientSendMessage', function (data) {
      //socket.emit('msg', data);
      //socket.broadcast.emit('msg', data);
      socket.get('room', function (err, room) {
        socket.get('name', function (err, name) {
          var obj = { 'message': name + ' : ' + data.message };
          socket.broadcast.to(room).emit('msg', { 'message': name + ' : ' + data.message });
          socket.emit('msg', obj);
          //socket.broadcast.emit('msg', obj);
          console.log(data.message + ' sent by ' + name + ' to ' + room);
        });
      });
    });
  });
}

exports.initListeners = initListeners;