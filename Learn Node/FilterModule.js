var mod = require('./MyModule');

mod(process.argv[2], process.argv[3], function  (err, list) {
	if (err) 
	 	return console.error('Erro : ' + err);

	list.forEach(function  (val) {
		console.log(val);
	})
});