// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  let result='';
  if(req.method === 'POST'){
    req.on('data',(chunk)=>{
      result += chunk.toString();
      fs.appendFileSync('data.txt',result)
      const finalData = fs.readFileSync('data.txt',{encoding:'utf8'})
      console.log(finalData)
    })
  }
    res.end("data received");
});

export default server;
