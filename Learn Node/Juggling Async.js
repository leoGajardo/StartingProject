var http = require('http');
var bl = require('bl');
var results = [];
var cont = 0;

function printResults () {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

function httpGet (index) {
	http.get(process.argv[2 + index], function  (res) {
		res.pipe(bl(function  (err, data) {
			if (err)
				return console.error(data);

			results[index] = data.toString();
			cont++;

			if (cont == 3)
				printResults();
		}));
	});
}



for (var i = 0; i < 3; i++)
	httpGet(i);
