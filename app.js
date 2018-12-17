//导包
const express=require('express');
const router=require('./router');
const body=require('body-parser');
//配置
const app=express();
//配置模板引擎
app.engine('html', require('express-art-template'));
app.use(body.urlencoded({ extended: false }))
app.use(body.json())
//统一处理第三方包资源
app.use('/node_modules',express.static('./node_modules'));
//统一处理静态资源
app.use('/public',express.static('./public'));
//挂载路由
app.use(router);
//监听端口
app.listen(1235, () => {
    console.log("正常");
});