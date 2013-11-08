var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	var src = fs.createReadStream(process.argv[2]);
	var dest;
	src.pipe(dest);
	res.end(dest);
});

server.listen(8000);

