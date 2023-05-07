const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if(err) throw err;
//     console.log('Folder created...');
// });


// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 
'Hello World! \n', err => {
    if(err) throw err;
    console.log('Folder created...');

    // File append
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
'I love Javascript', err => {
    if(err) throw err;
    console.log('Folder created...')
    }
    );
}
);