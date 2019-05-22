const express=require("express");
const app=express();
// const cookieparser=require("cookie-parser");

// const log=(req,res,next)=>{
//     console.log("有请求进来了",req.url)
//     next()
// }
// const time=(req,res,next)=>{
//     req.time=new Date().getTime();
//     next()
// }
app.get('/setcookie',(req,res)=>{
    res.cookie('username','张三',{
        maxAge:1000*60*5
    })
    res.cookie('age','uuu',{
        maxAge:1000*60*5
    })
    res.send("cookie设置成功")
})
const time=(type)=>{
    return (req,res,next)=>{
        if(type==='day'){
            req.time=new Date().getDay();
        }else{
            req.time=new Date().getTime();
        }
        next();
    }
}
// app.use(log)
app.use(time())
// app.use(cookieparser)
app.get("/",(req ,res)=>{
    res.send("Hlleo")
})

app.get("/abc",(req,res)=>{
    console.log(req.time)
    res.send("wwww");
})

app.listen(4000)