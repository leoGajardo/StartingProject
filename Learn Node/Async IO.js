var fs = require('fs');

var data = fs.readFile(process.argv[2],[],function  (err, data) {
	if (err) {
		throw err;
	}
	arrayLines = data.toString().split('\n');
	console.log(arrayLines.length -1);
});