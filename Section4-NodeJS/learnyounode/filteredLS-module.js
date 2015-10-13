module.exports = function (dir, filter, callback) {
	var fs = require('fs');
	var dirs = fs.readdir(dir, doneReadingDirs);

	function doneReadingDirs(err, list) {
		if (err) {
			return callback(err, null);
		}
		
		var files = list.toString().split("\n");
		var listNames = list.filter(function(item) {
			return item.search(new RegExp(filter)) > 0;
		});
		
		return callback(null, listNames);
	}
}