let  userInfo=localStorage.getItem('userInfo');
userInfo=userInfo?JSON.parse(userInfo): null;

if(!userInfo){
    location.href='../login.html'
}else{
    $(".nickname").html(userInfo.username);
    $(".avator").attr("src",userInfo.avatar)
}

$("#modify").click(function(){
    $("#addstu6").modal();
})

$("#addstu9").click(function(){
    var formData=new FormData();
    formData.append('avatar',$('input[name="avatar"]')[0].files[0])
    
    $.ajax({
        url:'http://localhost:3000/api/user/upload',
        method:'POST',
        headers:{
            'access-token':localStorage.getItem('token')
        },
        data:formData,
        processData: false,
        contentType:false,
        success:function(res){
            if(res.code===0){
                $(".avator").attr('src',res.data.avatar);
                var userInfo=JSON.parse(localStorage.getItem('userInfo'));
                userInfo.avatar=res.data.avatar;
                localStorage.setItem('userInfo',JSON.stringify(userInfo))
            }else{
                alert(res.msg)
            }
            $("#addstu6").modal('hide');
        }

    })
})