const fs = require("fs");

const http = require("http");
const express = require("express");

const app = express();
app.use(function(req, res, next) {
  //   console.log("host", req.headers.host);
  if (req.headers.host.includes("localhost")) {
    next();
  } else {
    if (req.secure) {
      // request was via https, so do no special handling
      console.log("secure");
      next();
    } else {
      console.log("not secure");
      next();
      // request was via http, so redirect to https
      // res.redirect("https://" + req.headers.host + req.url);
    }
  }
});
app.use(express.static("public"));

var httpServer = http.createServer(app);

httpServer.listen(3081);
console.log("3081 watched");
