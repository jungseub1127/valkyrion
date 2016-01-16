/* 
	var http = require('http')
	var map = require('through2-map')
	var income = [];
	var url = require('url');
	console.log(process.argv[1]);
	console.log(process.argv[2]);
	console.log(process.argv[3]);
	console.log(process.argv[4]);
     var server = http.createServer(function (req, res) {
    	if(req.method != 'GET')
    		return res.end('send me a POST\n');
    		
    	res.writeHead(200, { 'Content-Type': 'application/json' });
    	
    	income = url.parse(req.url, true)
    	console.log(income);
    	res.end(new Date().toISOString());
    	
    	  req.pipe(map(function (chunk) {
    	       return chunk.toString().toUpperCase();
    	     })).pipe(res);
    	 
     })
       server.listen(process.argv[2]);

     

   */
/*
var http   = require('http');
var moment = require('moment');
var url    = require('url');

server = http.createServer(function(req, res) {
  var data = '';

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  req.on('data', function(chunk) {
    data += chunk;
  });

  req.on('end', function() {
    var urlObj = url.parse(req.url, true);

    if ( typeof urlObj.query.iso === 'string' )
    {
      var recIso = moment(urlObj.query.iso);

      if( urlObj.pathname.split('/').pop() === 'unixtime' ) // ofc. I could do a regex like /\/unixtime$/
      {

        res.write(JSON.stringify({
      	unixtime: parseInt(recIso.format('x'))
        }));

      }
      else
      {

        res.write(JSON.stringify({
          hour:   recIso.hour(),
          minute: recIso.minute(),
          second: recIso.second()
        }));

      }
    }

    res.end();
  });

}).listen(process.argv[2]);*/


 var http = require('http')
     var url = require('url')

     function parsetime (time) {
       return {
         hour: time.getHours(),
         minute: time.getMinutes(),
         second: time.getSeconds()
       }
     }

     function unixtime (time) {
       return { unixtime : time.getTime() }
     }

     var server = http.createServer(function (req, res) {
       var parsedUrl = url.parse(req.url, true)
       //console.log(parsedUrl);
       var time = new Date(parsedUrl.query.iso)
       var result
       if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
       else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
          console.log('33 = '+JSON.stringify(result));
        
       if (result) {
    	//   console.log('aaaa = '+JSON.stringify(result));
         res.writeHead(200, { 'Content-Type': 'application/json' })
         res.end(JSON.stringify(result))
       } else {
         res.writeHead(404)
         res.end()
       }
     })
     server.listen(Number(process.argv[2]))