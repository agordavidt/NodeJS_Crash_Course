const url = require('url');

const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);