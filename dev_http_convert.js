 
	var http = require('http')
	var map = require('through2-map')
	
	console.log(process.argv[2]);
	console.log(process.argv[3]);
     var server = http.createServer(function (req, res) {
    	if(req.method != 'POST')
    		return res.end('send me a POST\n');
    	
    	  req.pipe(map(function (chunk) {
    	       return chunk.toString().toUpperCase();
    	     })).pipe(res);
    	 
     })
       server.listen(process.argv[2]);

     

   