var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({

  host:'localhost',
  port:'3088',
  user:'root',
  password:'yy19990810',
  database:'TravelApp'

});
