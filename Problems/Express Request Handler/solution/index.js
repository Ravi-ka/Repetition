// Please don't change the pre-written code

const express = require("express");
const server = express();

server.get('/',(req,res)=>{
    if(req.method === 'GET')
    res.send('get')
})

server.post('/',(req,res)=>{
    if(req.method === 'POST')
    res.send('post')
})

server.put('/',(req,res)=>{
    if(req.method === 'PUT')
    res.send('put')
})

server.delete('/',(req,res)=>{
    if(req.method === 'DELETE')
    res.send('delete')
})

module.exports = server;
