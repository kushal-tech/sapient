var path = require("path");
var express = require("express");
var fs = require("fs");

var app = express();
var port = 8200;
app.use("/", express.static(path.join(__dirname, "public")));
app.use(function(req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Disable caching so we'll always get the latest comments.
  res.setHeader("Cache-Control", "no-cache");
  next();
});

// viewed at http://localhost:8080
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
console.log("Server is running at " + port);
app.listen(port);
