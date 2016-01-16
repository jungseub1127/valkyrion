
var http = require('http');


var bl = require('bl');
var bl_result = [];
var cnt = 0;
//var concat = require('concat-stream');

	function httpGet(index){
		http.get(process.argv[index+2], function callback (response) {   
			response.pipe(bl(function(err,data){
				bl_result[index] = data.toString();
			//	console.log(data.toString());
				
				cnt++;
				if(cnt==3)
					printResults();
			}))
		});
		
	}
	
	function printResults () {
	       for (var i = 0; i < 3; i++)
	         console.log(bl_result[i])
	     }
	
	for(var i = 0;i<3;i++)
		{
		httpGet(i);
		}
	
/*	
	 var http = require('http')
     var bl = require('bl')
     var results = []
     var count = 0

     function printResults () {
       for (var i = 0; i < 3; i++)
         console.log(results[i])
     }

     function httpGet (index) {
       http.get(process.argv[2 + index], function (response) {
         response.pipe(bl(function (err, data) {
           if (err)
             return console.error(err)

           results[index] = data.toString()
           count++

           if (count == 3)
             printResults()
         }))
       })
     }

     for (var i = 0; i < 3; i++)
       httpGet(i)*/