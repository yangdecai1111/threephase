const db=require('../config/db')

const schema=new db.Schema({
    name:{
        type:String,
        required:true
    },
    sex:{
        type:Number,
        default:1
    },
    age:{
        type:Number,
        default:18
    },
    ismarry:{
        type:Number,
        default:0
    },
    iphone:Number

})


module.exports=db.model('student',schema)