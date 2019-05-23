const db=require('../config/db')

const schema=new db.Schema({
    name:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        default:"男"
    },
    age:{
        type:Number,
        default:18
    },
    ismarry:{
        type:String,
        default:"未"
    },
    iphone:Number

})


module.exports=db.model('student',schema)