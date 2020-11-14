/*
用来定义路由的路由器模块
 */
const express = require('express')
const md5 = require('blueimp-md5')

const UserModel = require('../models/UserModel')
const CategoryModel = require('../models/CategoryModel')
const ProductModel = require('../models/ProductModel')
const RoleModel = require('../models/RoleModel')
const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    port: '3306',
    password:"123456",//"zyf84571652",
    database: "TravelApp"
})

db.connect((err) => {
    if(err) throw err;
    console.log("Database is connected!");
})

// 得到路由器对象
const router = express.Router()
// console.log('router', router)

// 指定需要过滤的属性
const filter = {password: 0, __v: 0}


// 登陆
router.post('/login', (req, res) => {
    const {username, password} = req.body
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `select * from admin where username = "${username}" and password = "${password}";`
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('查询成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(data[0])
        {
            res.send({status: 0, data: {id: 1024, status: 0, username: username}, msg: '欢迎您，'+username});
        }
        else
        {
            res.send({status: 1, msg: '用户名或密码不正确!'});
        }

    })
    /*UserModel.findOne({username, password: md5(password)})
        .then(user => {
            if (user) { // 登陆成功
                // 生成一个cookie(userid: user._id), 并交给浏览器保存
                res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24})
                if (user.role_id) {
                    RoleModel.findOne({_id: user.role_id})
                        .then(role => {
                            user._doc.role = role
                            console.log('role user', user)
                            res.send({status: 0, data: user})
                        })
                } else {
                    user._doc.role = {menus: []}
                    // 返回登陆成功信息(包含user)
                    res.send({status: 0, data: user})
                }

            } else {// 登陆失败
                res.send({status: 1, msg: '用户名或密码不正确!'})
            }
        })
        .catch(error => {
            console.error('登陆异常', error)
            res.send({status: 1, msg: '登陆异常, 请重新尝试'})
        })*/
})

// 添加用户
router.post('/customer', (req, res) => {
    const {} = req.body
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `select * from customer;`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('查询成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(data[0])
        {
            res.send({status: 0, data: data, msg: '成功获取用户列表'});
        }
        else
        {
            res.send({status: 1, msg: '暂无用户'});
        }

    })
})

router.get('/customer/select', (req, res) => {
    const {id} = req.query;
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `select * from customer where userID = "${id}";`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('查询成功！',result,id);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(data[0])
        {
            res.send({status: 0, data: data, msg: '成功获取用户列表'});
        }
        else
        {
            res.send({status: 1, msg: '暂无用户', data});
        }

    })
})

router.get('/customer/modify', (req, res) => {
    const {userID,userName,userType,userSex} = req.query;
    const sqlCommand = `update customer set userName = "${userName}", userType = "${userType}", userSex = "${userSex}" where userID = "${userID}";`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('更新成功！',result,req.query);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(result.affectedRows == 1)
            res.send({status: 0, data: data, msg: '成功更新用户'});
        else
            res.send({status: 1, data: req.query, msg: '更新失败'});
})
})

router.post('/order/delete', (req, res) => {
    const {id} = req.body;
    console.log(id);
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `delete from orders where orderID = "${id}";`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('删除成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        res.send({status: 0, data: data, msg: '成功删除用户'});

    })
})

router.get('/order/modify', (req, res) => {
    const {id,orderState} = req.query;
    const sqlCommand = `update orders set orderState = "${orderState}" where orderID = "${id}";`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('更新成功！',result,req.query);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(result.affectedRows == 1)
            res.send({status: 0, data: data, msg: '成功更新订单'});
        else
            res.send({status: 1, data: req.query, msg: '更新失败'});
    })
})

router.get('/route/modify', (req, res) => {
    const {id,routeName,routePlace,routeLength,routeContent,routePrice} = req.query;
    const sqlCommand = `update route set routeName = "${routeName}",routePlace = "${routePlace}",routeLength = "${routeLength}", routeContent = "${routeContent}",routePrice = "${routePrice}" where routeID = "${id}";`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('更新成功！',result,req.query);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(result.affectedRows == 1)
            res.send({status: 0, data: data, msg: '成功更新路线'});
        else
            res.send({status: 1, data: req.query, msg: '更新失败'});
    })
})

router.get('/route/add', (req, res) => {
    const {id,routeName,routePlace,routeLength,routeContent,routePrice} = req.query;
    const sqlCommand = `insert into route values ("${id}","${id}","${routeName}","${routePlace}","${routeLength}","${routeContent}", "${routePrice}");`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('新增成功！',result,req.query);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(result.affectedRows == 1)
            res.send({status: 0, data: data, msg: '成功新增路线'});
        else
            res.send({status: 1, data: req.query, msg: '新增失败'});
    })
})

router.post('/discuss/delete', (req, res) => {
    const {userID, routeID} = req.body;
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `delete from discuss where userID = "${userID}" and routeID = "${routeID}";`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('删除成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        res.send({status: 0, data: data, msg: '成功删除用户'});

    })
})

router.post('/route/delete', (req, res) => {
    const {id} = req.body;
    console.log(id);
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `delete from route where routeID = "${id}";`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('删除成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        res.send({status: 0, data: data, msg: '成功删除用户'});

    })
})

router.post('/customer/delete', (req, res) => {
    const {id} = req.body;
    console.log(id);
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `delete from customer where userID = "${id}";`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('删除成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        res.send({status: 0, data: data, msg: '成功删除用户'});

    })
})

router.get('/discuss/select', (req, res) => {
    const {routeID, userID} = req.query;
    var sqlCommand = ``;
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    if(userID && routeID)
        sqlCommand = `select * from discuss where userID = "${userID}" and routeID = "${routeID}";`;
    else if(userID && !routeID)
        sqlCommand = `select * from discuss where userID = "${userID}";`;
    else if(!userID && routeID)
        sqlCommand = `select * from discuss where routeID = "${routeID}";`;
    else
        sqlCommand = `select * from discuss;`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('查询成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(data[0])
        {
            res.send({status: 0, data: data, msg: '成功获取订单列表'});
        }
        else
        {
            res.send({status: 1, msg: '暂无订单', data});
        }

    })
})

router.get('/order/select', (req, res) => {
    const {orderID, userID, routeID} = req.query;
    var sqlCommand = ``;
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    if(orderID && userID && routeID)
        sqlCommand = `select * from orders where userID = "${userID}" and routeID = "${routeID}" and orderID = "${orderID}";`;
    else if(orderID && userID && !routeID)
        sqlCommand = `select * from orders where userID = "${userID}" and orderID = "${orderID}";`;
    else if(orderID && !userID && routeID)
        sqlCommand = `select * from orders where routeID = "${routeID}" and orderID = "${orderID}";`;
    else if(!orderID && userID && routeID)
        sqlCommand = `select * from orders where userID = "${userID}" and routeID = "${routeID}";`;
    else if(!orderID && !userID && routeID)
        sqlCommand = `select * from orders where routeID = "${routeID}";`;
    else if(!orderID && userID && !routeID)
        sqlCommand = `select * from orders where userID = "${userID}";`;
    else if(orderID && !userID && !routeID)
        sqlCommand = `select * from orders where orderID = "${orderID}";`;
    else
        sqlCommand = `select * from orders;`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('查询成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(data[0])
        {
            res.send({status: 0, data: data, msg: '成功获取订单列表'});
        }
        else
        {
            res.send({status: 1, msg: '暂无订单', data});
        }

    })
})

router.get('/route/select', (req, res) => {
    const {name} = req.query;
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `select * from route where routeName like "%${name}%";`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('查询成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(data[0])
        {
            res.send({status: 0, data: data, msg: '成功获取用户列表'});
        }
        else
        {
            res.send({status: 1, msg: '暂无用户', data});
        }

    })
})
    // 读取请求参数数据
    /*const {username, password} = req.body
    // 处理: 判断用户是否已经存在, 如果存在, 返回提示错误的信息, 如果不存在, 保存
    // 查询(根据username)
    UserModel.findOne({username})
        .then(user => {
            // 如果user有值(已存在)
            if (user) {
                // 返回提示错误的信息
                res.send({status: 1, msg: '此用户已存在'})
                return new Promise(() => {
                })
            } else { // 没值(不存在)
                // 保存
                return UserModel.create({...req.body, password: md5(password || 'atguigu')})
            }
        })
        .then(user => {
            // 返回包含user的json数据
            res.send({status: 0, data: user})
        })
        .catch(error => {
            console.error('注册异常', error)
            res.send({status: 1, msg: '添加用户异常, 请重新尝试'})
        })
})*/

router.post('/discuss', (req, res) => {
    const {} = req.body
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `select * from discuss;`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('查询成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(data[0])
        {
            res.send({status: 0, data: data, msg: '成功获取讨论列表'});
        }
        else
        {
            res.send({status: 1, msg: '暂无讨论'});
        }

    })
})

router.post('/order', (req, res) => {
    const {} = req.body
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `select * from orders;`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('查询成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(data[0])
        {
            res.send({status: 0, data: data, msg: '成功获取订单列表'});
        }
        else
        {
            res.send({status: 1, msg: '暂无订单'});
        }

    })
})

router.post('/route', (req, res) => {
    const {} = req.body
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    const sqlCommand = `select * from route;`;
    db.query(sqlCommand, function(err, result){
        if(err){
            console.log('Error!', err.message);
            return;
        }
        console.log('查询成功！',result);
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        if(data[0])
        {
            res.send({status: 0, data: data, msg: '成功获取路线列表'});
        }
        else
        {
            res.send({status: 1, msg: '暂无路线'});
        }

    })
})

// 更新用户
router.post('/manage/user/update', (req, res) => {
    const user = req.body
    UserModel.findOneAndUpdate({_id: user._id}, user)
        .then(oldUser => {
            const data = Object.assign(oldUser, user)
            // 返回
            res.send({status: 0, data})
        })
        .catch(error => {
            console.error('更新用户异常', error)
            res.send({status: 1, msg: '更新用户异常, 请重新尝试'})
        })
})

// 删除用户
router.post('/manage/user/delete', (req, res) => {
    const {userId} = req.body
    UserModel.deleteOne({_id: userId})
        .then((doc) => {
            res.send({status: 0})
        })
})

// 获取用户信息的路由(根据cookie中的userid)
/*router.get('/user', (req, res) => {
  // 从请求的cookie得到userid
  const userid = req.cookies.userid
  // 如果不存在, 直接返回一个提示信息
  if (!userid) {
    return res.send({status: 1, msg: '请先登陆'})
  }
  // 根据userid查询对应的user
  UserModel.findOne({_id: userid}, filter)
    .then(user => {
      if (user) {
        res.send({status: 0, data: user})
      } else {
        // 通知浏览器删除userid cookie
        res.clearCookie('userid')
        res.send({status: 1, msg: '请先登陆'})
      }
    })
    .catch(error => {
      console.error('获取用户异常', error)
      res.send({status: 1, msg: '获取用户异常, 请重新尝试'})
    })
})*/

// 获取所有用户列表
router.get('/manage/user/list', (req, res) => {
    UserModel.find({username: {'$ne': 'admin'}})
        .then(users => {
            RoleModel.find().then(roles => {
                res.send({status: 0, data: {users, roles}})
            })
        })
        .catch(error => {
            console.error('获取用户列表异常', error)
            res.send({status: 1, msg: '获取用户列表异常, 请重新尝试'})
        })
})


// 添加分类
router.post('/manage/category/add', (req, res) => {
    const {categoryName, parentId} = req.body
    CategoryModel.create({name: categoryName, parentId: parentId || '0'})
        .then(category => {
            res.send({status: 0, data: category})
        })
        .catch(error => {
            console.error('添加分类异常', error)
            res.send({status: 1, msg: '添加分类异常, 请重新尝试'})
        })
})

// 获取分类列表
router.get('/manage/category/list', (req, res) => {
    const parentId = req.query.parentId || '0'
    CategoryModel.find({parentId})
        .then(categorys => {
            res.send({status: 0, data: categorys})
        })
        .catch(error => {
            console.error('获取分类列表异常', error)
            res.send({status: 1, msg: '获取分类列表异常, 请重新尝试'})
        })
})

// 更新分类名称
router.post('/manage/category/update', (req, res) => {
    const {categoryId, categoryName} = req.body
    CategoryModel.findOneAndUpdate({_id: categoryId}, {name: categoryName})
        .then(oldCategory => {
            res.send({status: 0})
        })
        .catch(error => {
            console.error('更新分类名称异常', error)
            res.send({status: 1, msg: '更新分类名称异常, 请重新尝试'})
        })
})

// 根据分类ID获取分类
router.get('/manage/category/info', (req, res) => {
    const categoryId = req.query.categoryId
    CategoryModel.findOne({_id: categoryId})
        .then(category => {
            res.send({status: 0, data: category})
        })
        .catch(error => {
            console.error('获取分类信息异常', error)
            res.send({status: 1, msg: '获取分类信息异常, 请重新尝试'})
        })
})


// 添加产品
router.post('/manage/product/add', (req, res) => {
    const product = req.body
    ProductModel.create(product)
        .then(product => {
            res.send({status: 0, data: product})
        })
        .catch(error => {
            console.error('添加产品异常', error)
            res.send({status: 1, msg: '添加产品异常, 请重新尝试'})
        })
})

// 获取产品分页列表
router.get('/manage/product/list', (req, res) => {
    const {pageNum, pageSize} = req.query
    ProductModel.find({})
        .then(products => {
            res.send({status: 0, data: pageFilter(products, pageNum, pageSize)})
        })
        .catch(error => {
            console.error('获取商品列表异常', error)
            res.send({status: 1, msg: '获取商品列表异常, 请重新尝试'})
        })
})

// 搜索产品列表
router.get('/manage/product/search', (req, res) => {
    const {pageNum, pageSize, searchName, productName, productDesc} = req.query
    let contition = {}
    if (productName) {
        contition = {name: new RegExp(`^.*${productName}.*$`)}
    } else if (productDesc) {
        contition = {desc: new RegExp(`^.*${productDesc}.*$`)}
    }
    ProductModel.find(contition)
        .then(products => {
            res.send({status: 0, data: pageFilter(products, pageNum, pageSize)})
        })
        .catch(error => {
            console.error('搜索商品列表异常', error)
            res.send({status: 1, msg: '搜索商品列表异常, 请重新尝试'})
        })
})

// 更新产品
router.post('/manage/product/update', (req, res) => {
    const product = req.body
    ProductModel.findOneAndUpdate({_id: product._id}, product)
        .then(oldProduct => {
            res.send({status: 0})
        })
        .catch(error => {
            console.error('更新商品异常', error)
            res.send({status: 1, msg: '更新商品名称异常, 请重新尝试'})
        })
})

// 更新产品状态(上架/下架)
router.post('/manage/product/updateStatus', (req, res) => {
    const {productId, status} = req.body
    ProductModel.findOneAndUpdate({_id: productId}, {status})
        .then(oldProduct => {
            res.send({status: 0})
        })
        .catch(error => {
            console.error('更新产品状态异常', error)
            res.send({status: 1, msg: '更新产品状态异常, 请重新尝试'})
        })
})


// 添加角色
router.post('/manage/role/add', (req, res) => {
    const {roleName} = req.body
    RoleModel.create({name: roleName})
        .then(role => {
            res.send({status: 0, data: role})
        })
        .catch(error => {
            console.error('添加角色异常', error)
            res.send({status: 1, msg: '添加角色异常, 请重新尝试'})
        })
})

// 获取角色列表
router.get('/manage/role/list', (req, res) => {
    RoleModel.find()
        .then(roles => {
            res.send({status: 0, data: roles})
        })
        .catch(error => {
            console.error('获取角色列表异常', error)
            res.send({status: 1, msg: '获取角色列表异常, 请重新尝试'})
        })
})

// 更新角色(设置权限)
router.post('/manage/role/update', (req, res) => {
    const role = req.body
    role.auth_time = Date.now()
    RoleModel.findOneAndUpdate({_id: role._id}, role)
        .then(oldRole => {
            // console.log('---', oldRole._doc)
            res.send({status: 0, data: {...oldRole._doc, ...role}})
        })
        .catch(error => {
            console.error('更新角色异常', error)
            res.send({status: 1, msg: '更新角色异常, 请重新尝试'})
        })
})


/*
得到指定数组的分页信息对象
 */
function pageFilter(arr, pageNum, pageSize) {
    pageNum = pageNum * 1
    pageSize = pageSize * 1
    const total = arr.length
    const pages = Math.floor((total + pageSize - 1) / pageSize)
    const start = pageSize * (pageNum - 1)
    const end = start + pageSize <= total ? start + pageSize : total
    const list = []
    for (var i = start; i < end; i++) {
        list.push(arr[i])
    }

    return {
        pageNum,
        total,
        pages,
        pageSize,
        list
    }
}

require('./file-upload')(router)

module.exports = router