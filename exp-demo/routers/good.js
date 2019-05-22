const express=require("express");
const router=express.Router();

router.get("/good",(req,res)=>{
    res.send("添加商品了");
})

module.exports=router;