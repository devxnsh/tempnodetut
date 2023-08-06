const {readFile, writeFile } = require('fs')
console.log('first task begin');
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {console.log(err);return}
    console.log(result)
    console.log('End of First Task')

})
console.log('next task begin.')