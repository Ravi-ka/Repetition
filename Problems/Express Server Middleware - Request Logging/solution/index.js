// Please don't change the pre-written code.

const express = require("express");
const { createLogicalAnd } = require("typescript");
const app = express();

const logRequest = (req, res,next) => {
  app.get('/',(req, res, next)=>{
    console.log(req.method);
    console.log(req.path);
    next();
  })
  //next();
};

logRequest();

//app.use(logRequest)
app.get("/",(req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
