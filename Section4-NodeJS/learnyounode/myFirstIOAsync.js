var fs = require('fs');
var buf = fs.readFile(process.argv[2], doneReadingFile);

function doneReadingFile(err, data) {
	var str = data.toString();
	var numLines = str.split('\n');
	console.log(numLines.length-1);
}
