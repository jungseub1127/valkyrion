
 var express = require('express');
 var fs = require('fs');
 var app = express();
 var http = require('http');
 
 app.use('/script', express.static(__dirname + "/script"));
 var server = http.createServer(app).listen(3303,function(){console.log('Server Running....')});
 
 
 app.get('/', function(req,res){
	 fs.readFile('./6_client.html', function(error,data){
	 res.writeHead(200,{'Content-Type':'text/html'});
	 res.end(data);
	 });
 });
 
 
 