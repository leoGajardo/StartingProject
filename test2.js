var net = require('net');

var server = net.createServer(function  (socket) {
	socket.write('Echo Server\r\n');
	socket.pipe(socket);
});

server.listen('1339', '127.0.0.1');
