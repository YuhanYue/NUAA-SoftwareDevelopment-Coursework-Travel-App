const mysql = require('mysql');

let db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'TravelApp',
  port: 3306
});

db.connect(function (err) {
  if (err) {
      console.log("err" + err.stack);
      return;
  }
  console.log("connection id " + db.threadId);
});

module.exports = db;