var l4rp = function(io) {
	
	var socket = io.connect('http://localhost');
	socket.on('test', receiveMessage);
	
	function receiveMessage(data) {
		console.log('got message!');
		console.log(data);
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
		send:function() {
			socket.emit('test', {'test' : 'Hello from client!'});
		}
	}
}(io);