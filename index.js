const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end(content);
        }
        );
    };

    if (req.url == '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'),
        (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(content);
        })
    };

    if (req.res === '/api/users') {
        const users = [
            { name: "David Agor", profession: "Software Engineer", experience: 2},
            {name: "Bestor Ukila", profession: "Digital Marketing", experience: 3}
        ];
        res.writeHead(200, { 'content-type': 'application/json'});
        res.end(JSON.stringify(users));
    }

});

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));