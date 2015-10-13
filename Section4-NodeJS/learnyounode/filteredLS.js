var fs = require('fs');
var dirs = fs.readdir(process.argv[2], doneReadingDirs);

function doneReadingDirs(err, list) {
	var myRe = new RegExp(process.argv[3]);
	var files = list.toString().split("\n");
	list.forEach(function(item) {
		var result = item.search(myRe);
		if(result > 0) {
		  console.log(item);
		} 
	});
}