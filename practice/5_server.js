
 var express = require('express');
 var fs = require('fs');
 var app = express();
 app.get('/', function(req,res){
	 fs.readFile('/index.html', function(error,data){
	 res.writeHead(200,{'Content-Type':'text/html'});
	 res.end(data);
	 });
 });
 
 
 app.get('/5_client', function(req,res){
	 fs.readFile('./5_client.html', function(error,data){
		 res.writeHead(200,{'Content-Type':'text/html'});
		 res.end(data);
	 });
 	});
 	
 	
 app.get('/imgs', function(req,res){
	 fs.readFile('./123123.jpg', function(error,data){
		 res.writeHead(200,{'Content-Type':'text/html'});
		 res.end(data);
	 });
 	});
 	
 	
 app.listen(3303, function(){
	 console.log('Server Start .');
 });
 
 
 
 