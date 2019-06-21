// 向外输出swagger的配置信息  插件可拔插  调试项目

const inert = require('inert')
const vision = require('vision')
const package = require('package')
const hapiSwagger = require('hapi-swagger')


module.exports = [
    inert,
    vision,
    {
        // 将其注入到项目中
        register:hapiSwagger,
        options:{
            info:{
                title:'接口文档',
                version:package.version
            },
            grouping:'tags',
            // 已标记声明如何展示
            tags:[
                {
                    name:'tests',
                    description:'测试相关'
                }
            ]
        }
    }
]