
const express =require('express')

const server = express();

server.get('/',(req, res)=>{
    res.status(200).send('Be a Coding Ninja')
})


module.exports = { server };
