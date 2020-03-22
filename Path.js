const path = require("path");

console.log('_filename' , __filename);

var pathObj = path.parse(__filename);
console.log(pathObj);