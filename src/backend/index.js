const express = require('express');
const bodyParser = require('body-parser');
const routerHome = require('./routes/router-home.js');
const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', function (req, res, next) {
    console.log(`Request Method: ${req.method}. Request Path: ${req.path}`);
    console.log(`Time: ${new Date()}`);
    next();
})

app.use("/", routerHome);

app.use((err, req, res, next) => {
    console.error("Error....", err.message);
    res.status(500).send("INTERNAL SERVER ERROR");
});
 
app.listen(3000)
