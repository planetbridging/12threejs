const https = require("https");
var express = require("express");
const fs = require("fs");
var subdomain = require("express-subdomain");

var uuid = require("uuid"),
  app = express(),
  server = require("http").createServer(app);
 var editor = express.Router();

  editor.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,authtoken"
    );
    next();
  });

  editor.use(
    subdomain("*.editor", express.static(__dirname + "/three.js-dev/"))
  );
  editor.use(subdomain("editor", editor));

  //app.use("/", express.static(__dirname + "/three.js-dev/"));
  app.use("/", express.static(__dirname + "/front/build/"));
  app.use("/editor/", express.static(__dirname + "/three.js-dev/"));

  app.listen(process.env.PORT || 456);