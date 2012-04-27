var l4rp = function(io) {
	
	var socket = io.connect('http://10.0.7.250');
	socket.on('msg', receiveMessage);
	
	function receiveMessage(data) {
		console.log(data.message);
	}
	
	socket.on('connect', function () {
	  console.log('connected');
	});
	
	socket.on('disconnect', function () {
	  console.log('disconnected');
	});
	
	socket.on('reconnecting', function () {
	  console.log('reconnecting');
	});
	
	return {
		setName : function(name) {
			socket.emit('setName', {'name' : name});
		},
		send : function (message) {
			socket.emit('clientSendMessage', {'message' : message});
		},
		join : function (room) {
			socket.emit('join', {'room' : room});
		}
	}
}(io);