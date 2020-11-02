/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/

var express = require('express');   //引入express模块
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例
 
var connection = mysql.createConnection({      //创建mysql实例
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'TravelApp'
});
connection.connect();
var sql = 'SELECT * FROM Admin';

connection.connect();
var sql = 'SELECT * FROM websites';
var str = " ";
connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    str = JSON.stringify(result);
    //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
    //console.log(result);   //数据库查询结果返回到result中
    console.log(str);
  });
app.get('/',function (req,res) {
    res.send('Hello,myServer');  //服务器响应请求
});
connection.end();
app.listen(3000,function () {    //监听3000端口
    console.log('Server running at 3000 port');
});