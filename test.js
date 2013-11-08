var http = require('http');

function onRequest8888 (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World!');
	response.end();
}

function onRequest123 (request, response) {
	response.writeHead(200,{'Content-Type': 'text/plain'});
	response.write('I\'m Port 3333 bitch!');
	response.end();
}


http.createServer(onRequest123).listen(3333);
http.createServer(onRequest8888).listen(8888);
console.log('Ouvindo em localhost:3333 e localhost:8888');