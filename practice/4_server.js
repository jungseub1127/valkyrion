
 var express = require('express');
 var app = express();
 app.get('/', function(req,res){
	 res.send('Hello World');
 });
 app.listen(3303, function(){
	 console.log('Server Start .');
 });
 
 