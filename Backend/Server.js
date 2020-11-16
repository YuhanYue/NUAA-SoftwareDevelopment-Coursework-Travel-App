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
    "SELECT * FROM customer WHERE username = ? AND userpassword = ?",
    [username, passwd],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
        console.log(result)
        //console.log(username)
      } else {
        res.send({ message: "Wrong username/password conbination!" });
      }
    }
  );
});

//update password
app.post("/updatePasswd", (req, res) => {
  const username = req.body.username;
  const passwd = req.body.passwd;
  
  //console.log(username);
  con.query(
    "UPDATE `TravelApp`.`customer` SET `userpassword` = '?' WHERE (`username` = '?'); ",
    [passwd, username],
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
  con.query("SELECT * FROM discuss where routeID = '?'",
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
      res.send({message: "No discuss for this route yet!"});
    }
  }
  );
});

//get orders for specific user
app.post("/userOrder", function(req, res){
  const username = req.body.username;
  //console.log(username)
  con.query("SELECT * FROM `TravelApp`.`Orders` WHERE username = ?",
  [username],
  (err, result) =>{
    if(err){
      res.send({err: err});
    }
    if(result.length > 0){
      res.send(result);
      console.log(result)
    } else{//只能res.send一次
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
    " INSERT INTO `TravelApp`.`Orders` ( `username`, `routeID`,`routeName`) VALUES ( ?,?,?)",
    [username, routeID, routeName],
    (err, result) => {
      console.log(routeName)
      //console.log(username);
      //console.log(routeID)
    }
  );
});


//delete order
app.post("/deleteOrder", (req, res) => {
  const username = req.body.username;
  const routeID = req.body.routeID;
  con.query(
    " DELETE FROM `TravelApp`.`Orders` WHERE (`routeID` = ?) AND (`username` = ?);",
    [routeID, username],
    (err, result) => {
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
    "INSERT INTO customer (username, userpassword) VALUES (?,?)",
    [username, passwd],
    (err, result) => {
      //console.log(err);
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
      console.log("favorite")
      console.log(result)
    }
  );

  //cancel favorite
  app.post("/cancelFavorite", (req, res) => {
    const username = req.body.username;
    const routeID = req.body.routeID;
    //console.log(username);
 
    con.query(
      "DELETE FROM Collection WHERE (username =?) AND (routeID = ?)",
      [username,routeID],

      (err, result) => {
        //console.log(err);
        console.log("cancel favorite");
        console.log(routeID);
      }
    );
  });
});

//getFavorite
app.post("/getFavorite", function(req, res){
  const username = req.body.username;
  con.query("SELECT * FROM Collection WHERE username = ?",
  [username],
  (err, result) =>{
    if(err){
      res.send({err: err});
    }
    if(result.length > 0){
      res.send(result);
      //console.log(result);
    } else{
      res.send({message: "No favorites for this user yet!"});
    }
  }
  );
});



app.post("/addReview", (req, res) => {
  const username = req.body.username;
  const review = req.body.review;
  const routeID = req.body.routeID;
  //console.log(username);
  con.query(
    "INSERT INTO `TravelApp`.`discuss` ( `username`,`content`,`routeID`) VALUES (?, ?, ?)",
    [username, review, routeID],
    (err, result) => {
      //console.log(routeID)
    }
  );
});

//get review for a user
/*
app.post("/userReview", (req, res) => {
  const username = req.body.username;
  //console.log(username);
  con.query(
    "SELECT * FROM Review WHERE username = ?",
    [username],
    (err, result) => {
      console.log(result);
    }
  );
});*/

//get review for a specific user
app.post("/userReview", function(req, res){
  const username = req.body.username;
  //console.log(username)
  con.query("SELECT * FROM discuss WHERE username = ?",
  [username],
  (err, result) =>{
    console.log(username)
    if(err){
      res.send({err: err});
    }
    if(result.length > 0){
      res.send(result);
      console.log(result)
    } else{//只能res.send一次
      res.send({message: "No discuss for this user yet!"});
    }
  }
  );
});

//delete review
app.post("/deleteReview", (req, res) => {
  const username = req.body.username;
  const reviewID = req.body.reviewID;
  con.query(
    " DELETE FROM `TravelApp`.`discuss` WHERE (`reviewID` = ?) AND (`username` = ?);",
    [reviewID, username],
    (err, result) => {
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
