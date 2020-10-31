/*const mysql = require('mysql');

let settings= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'TravelApp',
  port: 3306
});

settings.connect(function (err) {
  if (err) {
      console.log("err" + err.stack);
      return;
  }
  console.log("connection id " + settings.threadId);
});

module.exports = settings;*/


var DBconfig={};
DBconfig.db={
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'TravelApp'
}

module.exports = DBconfig;