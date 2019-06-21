// 拆分路由 ——>路由的模块化
module.exports = [
    {
        method:'GET',
        path:'/',
        handler:(request,reply)=>{
            reply('hello hapi');
        },
        config:{
            // 登录校验
            // swagger API文档生成工具 1.tags 2.description
            tags:['api','tests'],
            description:'测试hello-api'
        }
    }
]
