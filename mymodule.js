
var list = function(path_rec, ext)
{
	/*console.log('path = '+path_rec);
	console.log('ext = '+ext);*/
	
	var fs = require('fs');
	var path = require('path');
	fs.readdir(path_rec,function callback(err,list){
		//console.log(list);
		list.forEach(function callback(filename)
		{
			//console.log('*** '+path.extname(filename)+'          === '+'.'+process.argv[3]);
			if(path.extname(filename) == '.'+ext)
				{
				console.log(filename);
				}
		})
	});
}


module.exports = list;

