/*
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/b', function (req, res) {
    res.send('success');
});

app.listen(8880);*/

var express = require("express");
var app = express();

var mysql = require("mysql");
var bodyParser = require("body-parser");

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456", // empty for Windows
  database: "TravelApp",
});

//create listen

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});



con.connect(function (error) {
  if (error) console.log(error);
  else console.log("connected");
});




//login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const passwd = req.body.passwd;
  
  //console.log(username);
  con.query(
    "SELECT * FROM Users WHERE username = ? AND passwd = ?",
    [username, passwd],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password conbination!" });
      }
    }
  );
});

//get review for a route
app.post("/review", function(req, res){
  const routeID = req.body.routeID;
  con.query("SELECT * FROM Review where routeID = '?'",
  [routeID],
  (err, result) =>{
    console.log(routeID)
    if(err){
      res.send({err: err});
    }
    if(result.length > 0){
      res.send(result);
      console.log(result)
    } else{
      res.send({message: "No review for this route yet!"});
    }
  }
  );
});

//get orders for specific user
app.post("/userOrder", function(req, res){
  const username = req.body.username;
  con.query("SELECT * FROM Order where username = ?",
  [username],
  (err, result) =>{
    console.log(username)
    if(err){
      res.send({err: err});
    }
    if(result.length > 0){
      res.send(result);
      console.log(result)
    } else{
      res.send({message: "No orders for this user yet!"});
    }
  }
  );
});

//order
app.post("/order", (req, res) => {
  const username = req.body.username;
  const routeID = req.body.routeID;
  const routeName = req.body.routeName;
  con.query(
    " INSERT INTO `TravelApp`.`Order` ( `username`, `routeID`,`routeName`) VALUES ( ?,?,?)",
    [username, routeID, routeName],
    (err, result) => {
      console.log(routeName)
      console.log(err);
      //console.log(username);
      //console.log(routeID)
    }
  );
});

//register 
app.post("/register", (req, res) => {
  const username = req.body.username;
  const passwd = req.body.passwd;
  //console.log(username);
  con.query(
    "INSERT INTO Users (username, passwd) VALUES (?,?)",
    [username, passwd],
    (err, result) => {
      console.log(err);
    }
  );
});

//add favorite
app.post("/favorite", (req, res) => {
  const username = req.body.username;
  const routeID = req.body.routeID;
  con.query(
    " INSERT INTO Collection ( `username`,`routeID`) VALUES ( ?,?)",
    [username,routeID],
    (err, result) => {
      console.log(err);
      console.log(err);
    }
  );

  //cancel favorite
  app.post("/cancelFavorite", (req, res) => {
    const username = req.body.username;
    const routeID = req.body.routeID;
    //console.log(username);
    con.query(
      "DELETE FROM Collection WHERE (`username` =?) AND (`routeID ` = ?)",
      [username,routeID],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

//getFavorite
app.get("/getFavorite", function(req, res){
  
  con.query("SELECT * FROM Collection",
  (err, result) =>{
    if(err){
      res.send({err: err});
    }
    if(result.length > 0){
      res.send(result);
    } else{
      
    }
  }
  );
});


app.post("/addReview", (req, res) => {
  const username = req.body.username;
  const review = req.body.review;
  //console.log(username);
  con.query(
    "INSERT INTO `TravelApp`.`Review` ( `username`,`reviewContent`) VALUES (?, ?)",
    [username, review],
    (err, result) => {
      console.log(err);
    }
  );
});



app.get("/route", function (req, res) {
  con.query("select * from Route", function (error, rows, fields) {
    if (error) console.log(error);
    else {
      //console.log(rows);
      res.send(rows);
    }
  });
});
