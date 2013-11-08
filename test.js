var http = require('http');

function onRequest8888 (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World!');
	response.end();
}

function onRequest123 (request, response) {
	response.writeHead(200,{'Content-Type': 'text/plain'});
	response.write('I\'m Port 123 fuck!');
	response.end();
}


http.createServer(onRequest123).listen(3333);
http.createServer(onRequest8888).listen(8888);