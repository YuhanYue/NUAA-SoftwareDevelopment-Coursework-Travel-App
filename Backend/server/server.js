/*const express = require('express');
const app = new express();
const db = require('./connection');//database mysql

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/'));

app.listen(3000, () => {
  console.log('server start, listening is 3000');
});

module.exports = app;*/


var express = require('express');
var app = express();

var mysql = require('mysql');
//配置模块
var settings = require('./settings');
//连接数据库
var connection = mysql.createConnection(settings.db);
connection.connect();

//查询
var selectSQL = 'select * from `Users`';

var arr = [];
connection.query(selectSQL, function(err, rows) {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
        arr[i] = rows[i];
    }

    //把搜索值输出
    app.get('/', function(req, res) {
        res.send(arr);
    });


});
//关闭连接
connection.end();
app.listen(3000);