var net = require('net');
var moment = require('moment');

net.createServer();

var server = net.createServer(function  (socket) {
	var data = moment().format('YYYY-MM-DD HH:mm');

	socket.write(data + '\n');

	socket.end();

});

server.listen(8000);