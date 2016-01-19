var express = require('express');
var fs = require('fs');
var app = express();
var bodyparser = require('body-parser');
var multipart=require('connect-multiparty');

app.use(bodyparser());
/*app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());*/

app.listen(3303, "localhost", function(){
	console.log('Server Start . ');
});

app.get('/1_client.html', function(req,res){
	
	fs.readFile('1_client.html', function(error,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(data,function(error){
			console.log('응답완료');
		});
	});
});

app.post('/upload', multipart(),function(req,res){
	fs.readFile(req.files.uploadFile.path, function(error,data){
		var filePath = __dirname + '\\files\\' + req.files.uploadFile.name;
		fs.writeFile(filePath, data, function(error){
			if(error){
				console.log(error);
			} else {
				console.log('전송완료');
				res.redirect("back");
			}
		});
	});
});