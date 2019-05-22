const express=require('express');
const router=express.Router();


router.get('/login',(req,res)=>{
    res.send("用户登陆了");
})

module.exports=router;