// index.js

// Please don't change the pre-written code
const express = require("express");
const path = require("path"); // Import the 'path' module
const server = express();

const renderStatic = (server, staticFolder) => {
  const indexPath = path.join(staticFolder, "index.html");

  // Handle GET requests to /index.html
  server.get("/index.html", (req, res) => {
    res.sendFile(indexPath, (err) => {
      if (err) {
        res.status(err.status).end();
      }
    });
  });
};

// Route that uses the renderStatic function
server.get("/", (req, res) => {
  res.send("get method called!");
});

// Specify the static folder and call the renderStatic function
const staticFolder = path.join(__dirname, "public"); // Assuming 'static' is the folder containing 'index.html'
renderStatic(server, staticFolder);

module.exports = { renderStatic, server };
