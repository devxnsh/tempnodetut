//CommonJS - every file is module by default.
// Modules are encapsulated JS programs, share only required parts with end user.

const john = 'John', susan = "Susan", secret = 'SUPER SECRET';

const sayHi = (name) => { console.log('Hello There', name); }

const names = require('./3.1~modules1');
console.log(names);
sayHi('Susan')
sayHi(john)
sayHi(names.john);
module.exports=sayHi