// 单点入口文件
const Hapi = require('hapi')
// 引入helloHapi的路由模块文件
const routesHelloHapi = require('./routes/hello-hapi')
const routesShop = require('./routes/shops')
const routesOrders = require('./routes/orders')

// 引入配置模块文件
const config = require('./config/index')
// 引入插件模块文件
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const server = new Hapi.Server();

server.connection({
    port:config.port,
    host:config.host
})
const init = async () =>{
    // 注册
    await server.register([
        ...pluginHapiSwagger
    ])
    // 配置路由
    server.route([
        ...routesHelloHapi,
        ...routesShop,
        ...routesOrders
    ])
    // 启动
    await server.start();
    console.log(`Server running at:${server.info.uri}`)
}
init()
