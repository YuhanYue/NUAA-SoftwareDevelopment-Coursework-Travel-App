// CRUD SQL语句
//user:   增加评论和订单
var Users = {
	insert:'INSERT INTO Users(username, passwd) VALUES(0,?)',
	update:'update Users set passwd=?  where username=?',
	delete: 'delete from Users where username=?',
	queryById: 'select * from Users where username=?',
	queryAll: 'select * from Users'
};


 
module.exports = Users;