// index.js

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/',function (red, res) {
    res.send('Hello World');
})

module.exports.handler = serverless(app);