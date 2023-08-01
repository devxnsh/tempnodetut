
const data = require('./3.3~modules3')
console.log(data)
// data is printed as object, meaning both export files are clubbed together.

const num1=5,num2=20
const addValues = () => (console.log("Sum is", num1+num2))

addValues()