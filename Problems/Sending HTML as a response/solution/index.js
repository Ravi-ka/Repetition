const http = require('http')
const fs = require("fs")

const server = http.createServer((req, res)=>{
    const HTMLdata = fs.readFileSync('index.html').toString()
    res.end(HTMLdata) 
})

server.listen(8080,()=>{console.log('Port is listening on 8080')})

module.exports = server;
