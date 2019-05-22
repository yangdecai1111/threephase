const express=require('express');
const path=require("path");
const app=express();


app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index',{
        todos:[
            '吃饭',
            '睡觉',
            '打豆豆'
        ],
        msg:'<button>点我</button>'
    })
})
app.get('/about',(req,res)=>{
    res.render('about');
})

app.listen(3000);
console.log('服务启动成功')