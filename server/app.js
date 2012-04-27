
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , app = module.exports = express.createServer()
  , sio = require('socket.io').listen(app);

// Configuration

app.configure(function(){
	app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/../assets'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

// Socket stuff

sio.sockets.on('connection', function (socket) {
	
	//socket.emit('msg', {'test':'Hello, world!'});
	
  // When a message is recieved
  /*socket.on('test', function (data) {
    socket.emit('msg', data);
    socket.broadcast.emit('msg', data);
  });*/
});
