$(function () {
    $(".lv-login-body__btn").click(function () {
        $.post('http://localhost:3000/api/login', {
            username: $('input[name="username"]').val(),
            password: $('input[name="password"]').val()
        }, function (res) {
            if (res.code === 0) {

                localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
                localStorage.setItem('token', res.data.userInfo.token)
                location.href = "/"
            } else {
                alert(res.msg)
            }
        })
    })
})