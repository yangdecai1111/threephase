const db=require('../config/db');
//设计集合字段格式
const schema=new db.Schema({
    username:String,
    password:String,
    age:Number,
    sex:String,
    nickname:String,
    avatar:{
        type:String,
        default:'http://localhost:3000/img/img2.jpg'
    }
})
//暴露集合模型
module.exports=db.model('user',schema)