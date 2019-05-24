const jwt=require("jsonwebtoken");



module.exports=(req,res,next)=>{
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
                console.log(data);
                req.userId=data.id;
                next()
            }
        })
    }
}