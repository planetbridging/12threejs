const https = require("https");
var express = require("express");
const fs = require("fs");
var subdomain = require("express-subdomain");
var ping = express.Router();
var uuid = require("uuid"),
  app = express(),
  server = require("http").createServer(app);
 var editor = express.Router();


 ping.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,authtoken"
    );
    next();
  });
  ping.get('/' ,async(req, res) => {
    return res.status(200).send({ping: "ping"});
  });

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
ping.use(subdomain("ping", ping));

  //app.use("/", express.static(__dirname + "/three.js-dev/"));
  app.use("/", express.static(__dirname + "/front/build/"));
  app.use("/editor/", express.static(__dirname + "/three.js-dev/"));

  app.listen(process.env.PORT || 456);