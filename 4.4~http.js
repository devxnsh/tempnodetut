const { writeFileSync } = require('fs')
const http = require('http')
const { stringify } = require('querystring')

const server = http.createServer((req,res)=>
{   
    if(req.url ==='/'){
        res.end('<p>Welcome to our HomePage!</p> <a href = "./about"> About US</a>')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else{res.end(`<h1>OOPS, MOTHA FUCKA</h1>\n Keep Moving. Nothing to see here. <a href = '/'> back home </a>`)}
} )

server.listen(5000)

/* more info on request object at : 
https://www.tutorialspoint.com/nodejs/nodejs_request_object.htm */