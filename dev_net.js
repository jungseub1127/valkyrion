//console.log(process.argv[2]);
//console.log(process.argv[3]);
var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
	socket.write(strftime('%F %R', new Date()));
    socket.end();
  })
  server.listen(process.argv[2]);
 /* var date = new Date();
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getMinutes());
  
  */