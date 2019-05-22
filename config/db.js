const mongoose=require('mongoose');
//定义数据库URL
const url='mongodb://127.0.0.1:27017/sz1903'

//连接数据库
mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
    console.log("数据库连接成功")
}).catch((error)=>{
    console.log("数据库连接失败")
})





module.exports=mongoose;