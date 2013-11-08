var fs = require('fs');

var data = fs.readFileSync(process.argv[2], {encoding: 'utf8'});
arrayLines = data.split("\n");
console.log(arrayLines.length -1);