const express=require("express");
const app=express();
const path=require('path');
const userRouter=require("./routers/user")
const goodRouter=require("./routers/good")
const cartRouter=require("./routers/cart")



app.use('/user',userRouter)
app.use('/good',goodRouter)
app.use('/cart',cartRouter)
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
// app.all('/abc',(req,res)=>{
//     console.log('/abc');
//     res.send("Hello world")
// })
// app.all('/abc/efg',(req,res)=>{
//     console.log("/abc/efg");
//     res.send('/abc/efg')
// })
app.get('/abc/efg',(req,res)=>{
    console.log("/abc/efg");
    res.send("abcefg");
 })
app.use('/abc',(req,res,next)=>{
    console.log('/bac');
    next();
})

app.get("/f",(req,res)=>{
    console.log(req.query)
    res.send("HHHH")
})
app.post("/a",(req,res)=>{
    console.log(req.body);
    res.send("6666");
})
app.listen(3000);
console.log("服务启动了")