var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var numLines = str.split('\n');
console.log(numLines.length-1);)