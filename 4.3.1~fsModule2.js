/*Asynchronous file reading does not block the program execution. 
It allows the program to continue running while the file is being read in the background. 
This is accomplished by passing a callback function that is called when the file reading is complete. 
*/
const { readFile, writeFile } = require('fs')
console.log('STARTING NOW')
readFile('./subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first = result;
    readFile('./subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./subfolder/result~async.txt',
            `Here is the result : ${first}, ${second}`,
                (err, result) => {
            if(err) { 
                console.log(err); 
                return 
            }
            console.log("END OF TASKS")
        }
        )
    })

})
console.log('STARTING NEXT ONE')