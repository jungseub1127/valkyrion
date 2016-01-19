	var socketio = require('socket.io'),
		express = require('express'),
		http = require('http'),
		fs = require('fs');

	var app = express();
	app.set('port',3033);
	var server = http.createServer(app).listen(app.get('port'),function(){
		console.log("express server listening on port " + app.get('port'));
	});
	
	//라투팅 설정
	
	var io = socketio.listen(server);
	
	// Socket Connection
	io.sockets.on('connection', function(socket){
		console.log('ohohoh on da');
		
		// Message 전송 받은 것을 다른 Client 에게 보내기.
		socket.on('message', function(message){
			io.sockets.emit('message',message);
		});
	});
	
	