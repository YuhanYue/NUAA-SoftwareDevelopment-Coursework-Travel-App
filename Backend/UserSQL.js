//对用户登录名进行管理

var UserSQL = {
  insert: 'INSERT INTO Users(username,passwd) VALUES(?,?)', // 插入数据
  drop: 'DROP TABLE User', // 删除表中所有的数据
  queryAll: 'SELECT * FROM Users', // 查找表中所有数据
  getUserById: 'SELECT * FROM Users WHERE username =?', // 查找符合条件的数据
  update: 'Update ',
};

module.exports = UserSQL;