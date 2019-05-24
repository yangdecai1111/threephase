var Student = {
  /**
   * 查询学生
   */
  data: {
    list: [],
    totalPage: 1,
    pageSize: 3,
    pageNum: 1,
    searchName: ''
  },
  findStudent: function () {
    $.ajax({
      url: 'http://localhost:3000/api/student',
      method: 'get',
      headers: {
        'access-token': localStorage.getItem('token')
      },

      data: {
        pageSize: Student.data.pageSize,
        pageNum: Student.data.pageNum,
        name: Student.data.searchName
      },
      success: function (res) {
        if (res.code === 0) {
          Student.data.list = res.data.list;
          Student.data.totalPage = res.data.totalPage;
          let html = ejs.render(
            $("#inner1").html(), {
              list: Student.data.list
            }
          )
          let pageHtml = ejs.render(
            $("#inner2").html(), {
              num: Student.data.totalPage,
              pageNum: Student.data.pageNum
            }
          )


          $("#myTable tbody").html(html)
          $("#myPage").html(pageHtml)
        } else {
          alert("网络异常，请稍后重试。")
        }
      }
    })
    // $.get('http://localhost:3000/api/student', {
    //   pageSize: Student.data.pageSize,
    //   pageNum: Student.data.pageNum,
    //   name: Student.data.searchName
    // }, function (res) {

    //   if (res.code === 0) {
    //     Student.data.list = res.data.list;
    //     Student.data.totalPage = res.data.totalPage;
    //     let html = ejs.render(
    //       $("#inner1").html(), {
    //         list: Student.data.list
    //       }
    //     )
    //     let pageHtml = ejs.render(
    //       $("#inner2").html(), {
    //         num: Student.data.totalPage,
    //         pageNum: Student.data.pageNum
    //       }
    //     )


    //     $("#myTable tbody").html(html)
    //     $("#myPage").html(pageHtml)
    //   } else {
    //     alert("网络异常，请稍后重试。")
    //   }
    // })
  },
  addstudent: function (name, sex, age, marry, iphone) {
    $.ajax({
      url: 'http://localhost:3000/api/student',
      method: 'post',
      headers: {
        'access-token': localStorage.getItem('token')
      },
      data: {
        name: name,
        age: age,
        sex: sex,
        marry: marry,
        iphone: iphone
      },
      success: function (res) {
        if (res.code === 0) {
          $("#addstu2").modal('hide')
          alert("新增成功")
          Student.findStudent();
        } else {
          alert(res.msg)
        }
      }
    })
    // $.post('http://localhost:3000/api/student', {
    //   name: name,
    //   age: age,
    //   sex: sex,
    //   marry: marry,
    //   iphone: iphone
    // }, function (res) {
    //   if (res.code === 0) {
    //     $("#addstu2").modal('hide')
    //     alert("新增成功")
    //     Student.findStudent();
    //   } else {
    //     alert(res.msg)
    //   }
    // })
  },
  bind: function () {
    $("#myPage").on('click', 'li', function () {
      let toPage = $(this).data('num');
      if (toPage !== Student.data.pageNum) {
        Student.data.pageNum = toPage;
        Student.findStudent();
      }
    })
    $("#searchBut").click(function () {
      let value = $("#searchInput").val();
      Student.data.searchName = value;
      Student.data.pageNum = 1;
      Student.findStudent();
    })
    $("#searchInput").blur(function () {
      Student.data.searchName = '';
      Student.findStudent();
    })
    $("#addstu1").click(function () {
      $("#addstu2").modal();
    })

    $("#addstu3").click(function () {
      let name = $("#name").val();
      let sex = $('input[name="sex"]:checked').val();
      let age = parseInt($("#age option:selected").val());
      let marry = $('input[name="marry"]:checked').val();
      let iphone = $("#iphone").val();
      if (name != '') {
        Student.addstudent(name, sex, age, marry, iphone);
      } else {
        alert("用户名不能为空")
      }


    })
    $("#open").click(function () {
      $("#addstu12").modal()
    })
    $("#addstu13").click(function () {
      var formData = new FormData();
      formData.append('avatar', $('input[name="avatar"]')[0].files[0])
      $.ajax({
        url: 'http://localhost:3000/api/user/upload',
        method: 'POST',
        headers: {
          'access-token': localStorage.getItem('token')
        },
        data: formData,
        contentType: false,
        processData: false,
        success: function (res) {
          console.log(res)
          if (res.code === 0) {
            $(".avator").attr('src', res.data.avatar);
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            userInfo.avatar = res.data.avatar;
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
          } else {
            alert('修改失败')
          }
          $("#addstu12").modal('hide')
        }
      })
    })
  }

}



$(function () {
  // 请求
  Student.findStudent();
  Student.bind();
})