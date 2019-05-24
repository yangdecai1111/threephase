const bcrypt=require("bcrypt");
const UserModel=require("../modue/users");
const jwt=require("jsonwebtoken");
const fs=require("fs");
const path=require("path");
//注册模块
const reg=(req,res)=>{
    let body=Object.assign({},req.body,{
        password:bcrypt.hashSync(req.body.password,10)
    })
       
   
    UserModel.findOne({username: req.body.username}).then((data)=>{
        if(data){
            res.send({
                code:-1,
                msg:'用户名已存在'
            })
        }else{
            let user =new UserModel(body);
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
    })
    
   
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
        let token=jwt.sign({
            username:data.uesrname,
            avatar:data.avatar
        },"MYKEY")
            res.send({
                code:0,
                msg:'登录成功',
                data:{
                    userInfo:{
                        token:token,
                        username:data.username,
                        avatar:data.avatar
                    }
                    
                }

            })
        }else{
            res.send({
                code:-1,
                msg:'登录失败'
            })
        }

    })
}
//用户头像修改
const upload=(req,res)=>{
    //获取文件
    let newFilename=new Date().getTime()+"_"+req.file.originalname;
    let newPath=path.join(__dirname,'../public/img',newFilename)
    let data=fs.readFileSync(req.file.path);
    fs.writeFileSync(newPath,data);

    //修改数据库
    UserModel.updateOne({_id:req.userId},{avatar:`http://localhost:3000/img/${newFilename}`}).then(()=>{
        res.send({
            code:0,
            msg:'修改成功',
            data:{
                avatar:`http://localhost:3000/img/${newFilename}`
            }
        })
    }).catch((err)=>{
        console.log(err.message)
        res.send({
            code:-1,
            msg:err.message
        })
    })
}
module.exports={
    reg,
    login,
    upload
}