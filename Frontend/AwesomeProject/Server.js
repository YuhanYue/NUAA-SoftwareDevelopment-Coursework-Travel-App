//express_demo.js 文件
var express = require('express');
var app = express();
 
//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})
 
 
//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})
 
//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
 
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
 
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})


/*var fs = require('fs');
var express = require('express');
var app = express();

app.get('/b', function (req, res) {
    res.send('success');
});

app.listen(8880);*/

/*
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
  password:'123456',// empty for windows
  database:'TravelApp'

});

//create listen

var server = app.listen(4547, function(){
  var host = server.address().address
  var port = server.address().port
});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");ß
});

app.get('/Volumes/OVERAINY/Github/Travel-App/Frontend/AwesomeProject', function(req, res){
  con.query("select * from Users", function(error, rows, fields){
    if(error) console.log(error);
    else{
      console.log(rows);
      res.send(rows);
    }
  });
});
*/