
var userSQLmapping = {  
                insert:'INSERT INTO Users(username, passwd) VALUES(?,?)', 
                queryAll:'SELECT * FROM Users',  
                getUserByUsername:'SELECT * FROM Users WHERE username = ? ',
              };
              
 module.exports = userSQLmapping;