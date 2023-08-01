const {readFileSync,writeFileSync,appendFileSync}= require('fs'); //destructured module

const first = readFileSync('./subfolder/first.txt','utf8')

const second = readFileSync('./subfolder/second.txt','utf8')

console.log(first,"\n",second)

writeFileSync('./subfolder/result.txt',`hello world \n${first},\n${second}`)

appendFileSync('./subfolder/result.txt','\nI did it AGAIN!')

// files can also be appended using writefilesync by using a flag.
writeFileSync(
    './subfolder/result.txt',
    'Result has been appended previously, this is just a text message', {flag:"a"}
)