$(function () {

    $(".lv-register-body__btn").click(function () {
        let username = $("#txt").val();
        let password = $("#psd").val();
        let repassword = $("#repsd").val();
        var reg = /^[a-z,A-Z]\w{5,17}$/
        var reg1 = /\w{6}$/

        if (username == '' && password == '' || username == '') {
            $(".msg").html("请输入用户名").css('color', 'red');
        } else {

            if (!reg.test(username)) {
                $(".msg").html("用户名必须为字母数字下划线，以字母开头，长度6-18位").css('color', 'red');
            } else {
                if (password == '') {
                    $(".msg").html("请输入密码").css('color', 'red');
                } else {

                    if (!reg1.test(password)) {
                        $(".msg").html("密码至少为6位").css('color', 'red');
                    } else {
                        if (password !== repassword) {
                            $(".msg").html("两次密码不一致").css('color', 'red');
                        } else {
                            $(".msg").html("");
                            $.post('http://localhost:3000/api/reg', {
                                username: username,
                                password: password
                            }, function (res) {
                                if (res.code === 0) {
                                    alert(res.msg)
                                    location.href = '/'
                                } else {
                                    alert(res.msg);
                                }
                            })
                        }

                    }
                }
            }

        }
    })
})