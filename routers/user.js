const express=require("express");
const UserModel=require("../modue/users")
const router=express.Router();
//查找数据库记录
router.get('/find',(req,res)=>{
    UserModel.find().then(data=>{
        console.log(data);
        res.send({
            code:0,
            msg:'获取成功了',
            data:{
                list:data
            }

        })
    }).catch(err=>{
        console.log(err.message);
        res.send({
            code:-1,
            msg:'获取失败'
        })
    })
})
//添加记录
router.post('/add',(req,res)=>{
    let name=req.body.name;
    let pwd=req.body.pwd;
    let age=req.body.age;
    let sex=req.body.sex;
    let nickname=req.body.nickname;
    let avatar=req.body.avatar;

    if(!name || !pwd){
        res.send({
            code:-1,
            msg:'用户名或者密码不能为空'
        })
        return;
    }
    const user= new UserModel({
        username:name,
        password:pwd,
        age:age,
        sex:sex,
        nickname:nickname,
        avatar:avatar
    })
    user.save().then((data)=>{
       res.send({
           code:0,
           msg:'注册成功'
       })

    }).catch((err)=>{
        res.send({
            code:-1,
            msg:'注册失败'
        })
    })
})

//修改记录
router.post('/update',(req,res)=>{
    let id=req.body.id;
    let nickname=req.body.nickname;
    UserModel.updateOne({_id:id},{nickname:nickname}).then(data=>{
        console.log(data)
        res.send({
            code:0,
            msg:'修改成功'
        })
    }).catch(err=>{
        console.log(err)
        res.send({
            code:-1,
            msg:'修改失败'
        })
    })
})
//删除记录
router.get('/delete',(req,res)=>{
    let id=req.query.id;
    UserModel.deleteOne({_id:id}).then(data=>{
        res.send({
            code:0,
            msg:'删除成功'
        })
    }).catch(err=>{
        res.send({
            code:-1,
            msg:'删除失败'
        })
    })
})
module.exports=router;