var fs = require('fs');

var path = process.argv[2];

if (process.argv[3] != undefined) {
	var extension = process.argv[3];
} else {
	var extension = '*';
}

fs.readdir(path, function  (err, list) {
	if (err) throw err;
	var listFiltered = list.filter(function  (val) {
		if (extension == '*') {
			return true;
		}	else	{
			var regex = new RegExp('\\w+\\.' + extension);
			return val.match(regex);
		}
	});
	listFiltered.forEach(function  (data) {
		console.log(data);
	});
});