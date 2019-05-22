const bcrypt=require("bcrypt");
const UserModel=require("../modue/users");


//注册模块
const reg=(req,res)=>{
    let body=Object.assign({},req.body,{
        password:bcrypt.hashSync(req.body.password,10)
    })
       
    let user =new UserModel(body);

    if(req.body.username==user.username){
        res.send({
            code:-1,
            msg:'用户名已存在'
        })
    }else{
        user.save().then((data)=>{
            res.send({
                code:0,
                msg:'注册成功'
            })
        }).catch((err)=>{
            console.log(err.message);
            res.send({
                code:-1,
                msg:'注册失败'
            })
        })
    }
   
}
//登录模块
const login=(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    UserModel.findOne({username:username}).then((data)=>{
        if(!data){
           
            res.send({
                code:-1,
                msg:'用户名不存在'
            })
            return
        }
        let pwd=data.password
        let isOK=bcrypt.compareSync(password,pwd);
        if(isOK){
            res.send({
                code:0,
                msg:'登录成功'
            })
        }else{
            res.send({
                code:-1,
                msg:'登录失败'
            })
        }

    })
}
module.exports={
    reg,
    login
}