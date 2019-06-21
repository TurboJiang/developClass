// 配置模块化
//env文件中写入的是秘密配置信息 使用env2  引入.env文件中的信息 env文件不上传到github中
require('env2')('./.env')
const { env } =  process
console.log(env)
module.exports = {
    host:env.HOST,
    port:env.PORT
}