
/*
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/b', function (req, res) {
    res.send('success');
});

app.listen(8880);*/


var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({

  host:'localhost',
  port:'3306',
  user:'root',
  password:'123456',// empty for Windows
  database:'TravelApp'
});

//create listen

var server = app.listen(4545, function(){
  var host = server.address().address;
  var port = server.address().port;
});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
});

app.get('/Volumes/OVERAINY/Github/Travel-App/Frontend/AwesomeProject', function(req, res){
  con.query("select * from Route", function(error, rows, fields){
    if(error) console.log(error);

    else{
      console.log(rows);
      res.send(rows);
    }
  });
});
