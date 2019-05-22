const express=require("express");
const router=express.Router();
const usermodel=require("../modle/user")
router.get('/find',(req,res)=>{
    usermodel.find().then(data=>{
        res.render('index',{
            list:data
        })
    })
})

module.exports=router;