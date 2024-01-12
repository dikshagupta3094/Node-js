// Create class -> step 1
const EventEmitter = require('events')

// Create object -> step 2

const event = new EventEmitter();

event.on('subscribe',()=>{
    console.log('Thanks for subscribing to college wallah ');
    
});

console.log('Default maximum:', event.getMaxListeners())
event.setMaxListeners(5)
console.log('Default maximum:', event.getMaxListeners())
event.emit('subscribe');


