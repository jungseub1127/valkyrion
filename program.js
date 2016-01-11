//console.log("HELLO WORLD");
//console.log('learnyounode run');
//console.log(process.argv.length);
/*var sum = 0;
for(var i=2;i<process.argv.length;i++)
	{
	sum = sum + parseInt(process.argv[i]);
	}
console.log(sum);*/
//console.log(process.argv[2]);


/*var fs = require('fs')

    //var contents = fs.readFileSync(process.argv[2]);
	//var lines = contents.toString().split('\n').length - 1;
	var contents = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
	var lines = contents; 
     console.log(lines);*/

     // note you can avoid the .toString() by passing 'utf8' as the
     // second argument to readFileSync, then you'll get a String!
     //
     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
     

/*var fs = require('fs');

var str = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(str.length-1);*/
/*var myNumber;
var fs = require('fs');
function addOne()
{
	fs.readFile(process.argv[2],'utf8', function doneReading(err, fileContents) {
		console.log(fileContents.split('\n').length-1);
		//console.log(fileContents.toString().split('\n').length-1);
	  })
}
addOne();*/


/*fs.readFile(process.argv[2], 'utf8', function cntLine(err, data){
line = parseInt(data);
line++;
console.log(line);
}
)*/
;
	
//fs.readFileSync('C:\Users\k9423\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html');
/*var str = buf.toString();
str = fs.split('\n');*/
//console.log(fs);
//console.log(str);
/*
var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2],function callback(err,data)
{
	//console.log(process.argv[3]);
	for(var i=0;i<data.length;i++)
		{
		if(data[i].indexOf('.'+process.argv[3]) > 0)
		console.log(data[i]);
		}
	
	data.forEach(function(filename)
	{
		if(path.extname(filename)==='.'+process.argv[3])
			console.log(filename);
	})
});*/


/*var fs = require('fs');
var path = require('path');
//console.log(fs);

//console.log('\n\n'+path.extname('aa'));
fs.readdir(process.argv[2],function callback(err,list){
	//console.log(list);
	list.forEach(function callback(filename)
	{
		//console.log('*** '+path.extname(filename)+'          === '+'.'+process.argv[3]);
		if(path.extname(filename) == '.'+process.argv[3])
			{
			console.log(filename);
			}
	})
});*/



var mymodule = require('./mymodule.js');
mymodule(process.argv[2],process.argv[3]);
//console.log(mymodule('aaaa','1231'));
