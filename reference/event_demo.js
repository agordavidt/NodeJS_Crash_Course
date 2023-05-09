const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmmitter = new MyEmitter();

// Event Listener
myEmmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmmitter.emit('event');
myEmmitter.emit('event');
myEmmitter.emit('event');
myEmmitter.emit('event');
