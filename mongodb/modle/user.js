const db=require("../config/db");

const schema=new db.Schema({
    username:String,
    age:Number,
    sex:String
});

const model=db.model('user',schema)

module.exports=model;