let  userInfo=localStorage.getItem('userInfo');
userInfo=userInfo?JSON.parse(userInfo): null;

if(!userInfo){
    location.href='../login.html'
}else{
    $(".nickname").html(userInfo.username);
    $(".avator").attr("src",userInfo.avatar)
}