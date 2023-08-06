const readline = require('readline');
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id) => {
  console.log(`data received, Welcome ${name} # ${id}`);
});
customEmitter.emit('response','John',34);