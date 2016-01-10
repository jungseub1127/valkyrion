//console.log(process.argv);
//console.log('learnyounode run');
//console.log(process.argv.length);
/*var sum = 0;
for(var i=2;i<process.argv.length;i++)
	{
	sum = sum + parseInt(process.argv[i]);
	}*/
//console.log(process.argv[2]);
/*var myNumber;
var fs = require('fs');
function addOne()
{
	fs.readFile(process.argv[2], function doneReading(err, fileContents) {
		console.log(fileContents.toString().split('\n').length-1);
	  })
}
addOne();
*/

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

var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2],function callback(err,data)
{
	//console.log(process.argv[3]);
	/*for(var i=0;i<data.length;i++)
		{
		if(data[i].indexOf('.'+process.argv[3]) > 0)
		console.log(data[i]);
		}
	*/
	data.forEach(function(filename)
	{
		if(path.extname(filename)==='.'+process.argv[3])
			console.log(filename);
	})
});
