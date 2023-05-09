const http = require('http');

// Create a server
http.createServer((req, res) => {
    // Write response
    res.write("I love programming!");
    res.end();
}).listen(5000, () => console.log("Server is running..."));