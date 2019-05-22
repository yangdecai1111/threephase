const express=require('express');
const path=require('path');
const app=express();
const userRouter=require('./routers/user');

//设置模板样式ejs
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

//设置req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//设置静态托管
app.use(express.static(path.join(__dirname,'./public')))


//设置路由中间件
app.use('/api',userRouter);

app.listen(3000)