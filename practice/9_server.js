 var socketio = require('socket.io');
 var express = require('express');
 var fs = require('fs');
 var http = require('http');
 
 var app = express();
 app.set('port',3033);
 
 //app.use('/script', express.static(__dirname + "/script"));
 var server = http.createServer(app).listen(3033,function(){
	 console.log('Server Running....')});
 
 
 app.get('/', function(req,res){
	 fs.readFile('9_client.html', function(error,data){
	 res.writeHead(200,{'Content-Type':'text/html'});
	 res.end(data);
	 });
 });
 
  var io = socketio.listen(server);
  
  io.sockets.on('connection', function(socket){
	  io.sockets.emit('test','hello world');
  });
 
 