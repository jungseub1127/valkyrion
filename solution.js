var module = require('./filter.js');
var dir = process.argv[2];
var filterStr = process.argv[3];
//console.log(dir+'  \n  '+ filterStr);

module(dir,filterStr, function(err,data){
	if(err)
		{
		return console.error('There was an error : ' , err);
		}
	data.forEach(function callback(file)
	{
		console.log(file);
	})
	
});


/*var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})*/