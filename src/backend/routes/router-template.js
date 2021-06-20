const express = require("express");
const routerTemplate = express.Router();

routerTemplate.get('/', function (req, res) {
    return res.send('Hello from template router')
});

routerTemplate.post('/fakeuser/:userId', function (req, res) {
    const { userId } = req.params;
    console.log(`You passed me ${userId} in the request params`);
    res.send(`You passed me ${userId} in the request params`);
});

routerTemplate.post('/randomvalue', function (req, res) {
    const { foo } = req.query;
    console.log(`You passed me ${foo} in the request query params`);
    res.send(`You passed me ${foo} in the request query params`);
});

routerTemplate.post('/model', function (req, res) {
    const { foo } = req.body;
    console.log(`You passed me ${foo} in the request body`);
    res.send(`You passed me ${foo} in the request body`);
});

module.exports = routerTemplate;