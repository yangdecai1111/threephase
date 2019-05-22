const db=require('../config/db');
//设计集合字段格式
const schema=new db.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    nickname:String,
    sex:{
        type:Number,
        default:1
    },
    avatar:{
        type:String,
        default:'http://localhost:3000/img/img2.jpg'
    },
    admin:{
        type:Number,
        default:0
    }
})
//暴露集合模型
module.exports=db.model('user',schema)