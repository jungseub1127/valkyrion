
var socketio = require('socket.io');

var io = socketio.listen(3303);
	console.log('success');
io.sockets.on('connection',function(socket){
	io.sockets.emit('connect_test','hihihi');
});