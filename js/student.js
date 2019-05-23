var Student = {
  /**
   * 查询学生
   */
  data:{
    list:[],
    totalPage:1,
    pageSize:3,
    pageNum:1,
    searchName:''
  },
  findStudent: function () {
    $.get('http://localhost:3000/api/student',{
        pageSize:Student.data.pageSize,
        pageNum:Student.data.pageNum,
        name:Student.data.searchName
    }, function (res) {
      
       if(res.code===0){
          Student.data.list=res.data.list;
          Student.data.totalPage=res.data.totalPage;
          let html=ejs.render(
            $("#inner1").html(),
            {list:Student.data.list}
          )
          let pageHtml=ejs.render(
            $("#inner2").html(),{
              num:Student.data.totalPage,
              pageNum:Student.data.pageNum
            }
          )


          $("#myTable tbody").html(html)
          $("#myPage").html(pageHtml)
       }else{
         alert("网络异常，请稍后重试。")
       }
    })
  },
  bind:function(){
    $("#myPage").on('click','li',function(){
      let toPage=$(this).data('num');
      if(toPage!==Student.data.pageNum){
        Student.data.pageNum=toPage;
        Student.findStudent();
      }
    })
  }
}




$(function () {
  // 请求
  Student.findStudent();
  Student.bind();
})