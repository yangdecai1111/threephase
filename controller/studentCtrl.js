const studentMode=require('../modue/student');
/**
 * 增加学生
 */
const add=(req,res)=>{
    let name=req.body.name;

    studentMode.findOne({name:name}).then((data)=>{
        if(data){
            res.send({
                code:0,
                msg:'该学生已存在'
            })
        }else{
            const student=new studentMode(req.body);
            student.save().then(()=>{
                res.send({
                    code:0,
                    msg:'新增成功'
                })
            }).catch((err)=>{
                console.log(err.message);
                res.send({
                    code:-1,
                    msg:'新增失败'
                })
            })
        }
    })
}
/**
 * 查找学生
 */
const find=(req,res)=>{
    let pageNum=parseInt(req.query.pageNum) || 1;
    let pageSize=parseInt(req.query.pageSize) || 10;
    let name=req.query.name;

    studentMode.find({name:new RegExp(name)}).count().then((num)=>{
        let totalPage=Math.ceil(num/pageSize);
    studentMode.find({name:new RegExp(name)}).skip(pageSize*(pageNum-1)).limit(pageSize).then((data)=>{
        res.send({
            code:0,
            msg:'OK',
            data:{
                list:data,
                totalPage
            }
            })
    }).catch((err)=>{
        console.log(err.message);
        res.send({
            code:-1,
            msg:'err'
            })
        })
    })
    
}

module.exports={
    add,
    find
}