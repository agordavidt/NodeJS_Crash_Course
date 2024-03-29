const url = require('url');

const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);

// Host (root domaain)
console.log("Host name: "+ myUrl.host);

// Path name
console.log("Path name: " + myUrl.pathname);


// Serialized query
console.log("Query parameters: " + myUrl.search);


const states = ["Jigawa", "Kebbi", "Kano", "Nassarawa"];
states.forEach((state) => console.log(state));
