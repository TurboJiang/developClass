npm init -y
安装yarn add mysql2 sequelize sequelize-cli
./node_modules/.bin/sequelize init
<!-- 配置文件结束之后运行 -->
./node_modules/.bin/sequelize db:create
<!-- 迁移表 -->
./node_modules/.bin/sequelize migration:create --name create-shops-table 建表或修改表
./node_modules/.bin/sequelize db:migrate
./node_modules/.bin/sequelize seed:create --name init-shops初始化数据

        up:(queryInterface,sequelize)=>{
            queryInterface.createTable(
                'shops',
                {
                    id:{
                        type:Sequelize.INTEGER,
                        autoIncrement:true,
                        primaryKey:true
                    },
                    name:{
                        type:Sequelize.STRING,
                        allowNull:false
                    },
                    thumb_url:Sequelize_STRING,
                    
                }
            )
        }

- sequelize 脚手架
    mysql2 数据库驱动
    sequelize orm工具 table->object
    对底层的sql API 化 model
    sequelize-cli 命令行工具

- config 数据库配置文件 改密码  
    ./node_modules/.bin/sequelize init
    ./node_modules/.bin/sequelize db:create
- migration 
db:migrate 执行迁移
