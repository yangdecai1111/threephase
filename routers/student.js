const studentCtrl=require('../controller/studentCtrl');
const express=require("express");
const jwt=require("jsonwebtoken");
const  router=express.Router();

router.route('/student').post((req,res,next)=>{
    let token=req.get('access-token')
    if(!token){
        res.send({
            code:-1,
            msg:'token不存在'
        })
    }else{
        jwt.verify(token,'MYKEY',(err,data)=>{
            if(err){
                res.send({
                    code:-1,
                    msg:err.message
                })
            }else{
                next()
            }
        })
    }
},studentCtrl.add).get((req,res,next)=>{
    let token=req.get('access-token')
    if(!token){
        res.send({
            code:-1,
            msg:'token不存在'
        })
    }else{
        jwt.verify(token,'MYKEY',(err,data)=>{
            if(err){
                res.send({
                    code:-1,
                    msg:err.message
                })
            }else{
                next()
            }
        })
    }
},studentCtrl.find)

module.exports=router;