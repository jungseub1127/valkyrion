	var fs = require('fs');
	var http = require('http')
	console.log(process.argv[2]);
	console.log(process.argv[3]);
     var server = http.createServer(function (req, res) {
    	 var income = fs.createReadStream(process.argv[3]);
    	 income.pipe(res);
    	 //res.end('She\'ll be right captain cook also you little ripper budgie smugglers. Grab us a rage on where he\'s got a massive slabs. We\'re going brass razoo no worries come a galah. You little ripper bloke no worries it\'ll be bogan');
     })
       server.listen(process.argv[2]);


/*var http = require('http');
  var fs = require('fs');

var server = http.createServer(function callback (request, response) {
  var income = fs.createReadStream(process.argv[3]); 
  income.pipe(response);
});
server.listen(Number(process.argv[2]));
*/


/*
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))*/