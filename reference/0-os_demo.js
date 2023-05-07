const os = require('os');

// Plarform
console.log('CPU Platform:\t' + os.platform());


// CPU Arch
console.log('CPU Arch:\t' + os.arch());

// CPU core Info
console.log(os.cpus());


// Free memory
console.log('Free Memory:\t' + os.freemem());

// Total memeory
console.log('Total Memory:\t' + os.totalmem());

// Uptime
console.log('Uptime:\t' + os.uptime());