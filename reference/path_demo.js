// core module
const path = require('path');

// Base file name
console.log("The file name is :" + path.basename(__filename));

// Directory name
console.log("The directory path is:" + path.dirname(__dirname));

//File Extenson
console.log("The file extension is:" + path.extname(__filename));

// Create path object
console.log("The path object is:" + path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));