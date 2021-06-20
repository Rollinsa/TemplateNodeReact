const express = require("express");
const routerHome = express.Router();
const routerTemplate = require("./router-template.js");

routerHome.use("/template", routerTemplate);

routerHome.use("/", function(req, res) {
    return res.send('Hello from router home');
});

module.exports = routerHome;