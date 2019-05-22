const express=require("express");
const path=require("path");
const app=express();
const userRouter=require('./routes/user')
app.set('views',path.join(__dirname,'./views'))
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/user',userRouter);

app.listen(3000);
console.log("服务启动了")