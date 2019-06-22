fullstack全栈
front engineer
backend /api


- restful api
浏览器与服务器通信方式的一种设计风格

直接将资源映射成服务器
架构：yarn add json-server
package.json:
    "scripts": {
        "server":"json-server db.json"
    },

1. restful世界中，一切皆资源
- url来唯一定位资源的识别符
    /posts/:id/comments
- 添加一条评论？ /comments/2 定位到资源
    {
        "id":2,
        "body":'哈皮',
        "postId":2
    }
    设计好URL:/comments   POST方式发送 json Server 会自动进行id自增
- 设计有意义的URL
    资源状态改变
        新增：POST/comments id：2
        修改内容：PUT /comments/2 body:'hapi'
            PUT:
                id：2
                postId：1
                body:'hapi
            PATCH: 其他字段不勾选
                body:'hapi'

        操作           SQL方法             HTTP动词
        CREATE          INSERT              POST
        READ            SELECT              GET
        UPDATE          UPDATE              PUT、PATCH
        DELETE          DELETE              DELETE

    状态切换：
        使用定义的谓语动词