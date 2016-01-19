 var socketio = require('socket.io');
 var express = require('express');
 var http = require('http');
 var fs = require('fs');
 
 var app = express();
 app.set('port',3033);
 
 //app.use('/script', express.static(__dirname + "/script"));
 var server = http.createServer(app).listen(app.get('port'),function(){
	 console.log('Server Running.... 제발되라..'+app.get('port'));
	 });
 
 
 app.get('/', function(req,res){
	 fs.readFile('11_client.html', function(error,data){
	 res.writeHead(200,{'Content-Type':'text/html'});
	 res.end(data);
	 });
 });
 
  var io = socketio.listen(server);
  
  io.sockets.on('connection', function(socket){
	  console.log('연결되었습니다');
	  
	 //room join
	  socket.on('join', function(data){
			socket.join(data.roomname);
			socket.set('room',data.roomname);
			socket.get('room', function(error, room){
				io.sockets.in(room).emit('join', data.userid);
			});
		});
	
	 
	socket.on('message',function(message){
		  socket.get('roomname',function(error,room){
		  io.sockets.in(room).emit('message',message); 
	  });
	});
	
	socket.on('disconnect', function(){});
  });
 
 