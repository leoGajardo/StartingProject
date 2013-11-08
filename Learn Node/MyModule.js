module.exports = function (path, filter, callBack) {
	var fs = require('fs');
	var filter = new RegExp('\\.' + filter + '$','ig');	
	fs.readdir(path, function  (err, list) {
		if (err) 
			return callBack(err)
		list = list.filter(function (val) {
			return val.match(filter);	
		});
		callBack(null, list);	
	});
};