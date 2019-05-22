const express=require("express");
const router=express.Router();

router.get("/cart",(req,res)=>{
    res.send("购物车有东西了")
})

module.exports=router;