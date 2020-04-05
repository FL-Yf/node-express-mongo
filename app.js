//app.js文件

//引入刚才定义的hero路由
const hero = require('./router/hero')
//1.引入express模块
const express = require('express')

//中间介  解析post ，get 登返回的数据
var bodyParser = require('body-parser');

//2.创建app对象
const app = express()
app.use(bodyParser());
app.use('/api',hero)
//定义简单路由
app.use('/',(req,res) => {
  res.send('Yo!')
})
//定义服务启动端口
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})