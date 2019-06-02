# 学生管理系统接口文档

以下接口的baseURL为：http://localhsot:3000

## 1、注册

- 请求地址：'/api/reg'
- 请求方式：'POST'
- 请求参数：'body'

 | 参数名字 | 参数类型 | 是否必要 | 说明 |
 | --- | --- | --- | --- |
| username | String | Y | 用户名 |
| password | String | Y | 密码 |
| sex | Number | N | 性别 |
| nickname | String | N | 用户昵称 |
| avatar | String |  N  | 用户头像 |
| admin | Number | N | 是否是管理员 |

返回:

```js
    {
        code:0, //0代表成，-1代表失败
        msg:'OK'
    }
```

## 2、登录

- 请求地址:'/api/login'
- 请求方式：'POST'
- 请求参数：'body'

| 参数名字 | 参数类型 | 是否必要 | 说明 |
| --- | --- | --- | --- |
| username | String | Y | 用户名 |
| password | String | Y | 密码 |

返回：

```js
    {
        code:0,//0代表成功，-1代表失败
        msg:'ok'
    }
```

## 3、新增学生

- 请求地址:'/api/student'
- 请求方式：'POST'
- 请求参数：'body'

| 参数名字 | 参数类型 | 是否必要 | 说明 |
| --- | --- | --- | --- |
| name | String | Y | 学生姓名 |
| sex | Number | N | 学生性别 |
| age | Number | N | 学生年龄 |
| ismarry | Number | N | 是否结婚 |
| iphone | Number | N | 手机号码 |

返回：

```js
    {
        code:0,//0代表成功，-1代表失败
        msg:'ok'
    }
```

## 4、查询学生(分页，模糊查询)

- 请求地址:'/api/student'
- 请求方式：'get'
- 请求参数：'query'

| 参数名字 | 参数类型 | 是否必要 | 说明 |
| --- | --- | --- | --- |
| pageNum | Number | N | 请求的页数 |
| pageSize | Number | N | 每页显示的条数 |
| name | String | N | 查询学生的名字 |


返回：

```js
    {
        code:0,//0代表成功，-1代表失败
        msg:'ok',
        data:{
            totalPage:10,//总共的页数
            list:[{name:"",age:18}]
        }
    }
```
