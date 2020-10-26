const express = require('express');
const app = new express();
const db = require('./connection');//database mysql

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/'));

app.listen(3000, () => {
  console.log('server start, listening is 3000');
});

module.exports = app;