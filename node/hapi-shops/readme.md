#mysql
- mysql -u root -p
#hapi...
- yarn add hapi@16 mysql2 sequelize env2
- yarn add sequelize-cli -D
- env2转json

##数据库i增删改查hapi化
- 初始化 ./node_modules/.bin/sequelize init
- 创建数据库 ./node_modules/.bin/sequelize db:create
- 创建数据迁移文件 ./node_modules/.bin/sequelize migration:create --name create-shop-table
                  ./node_modules/.bin/sequelize migration:create --name create-goods-table
- 初始化数据创建表  ./node_modules/.bin/sequelize seed:create --name init-shops
            ./node_modules/.bin/sequelize seed:create --name init-goods
- 运行脚本./node_modules/.bin/sequelize db:migrate
- 存储数据        ./node_modules/.bin/sequelize db:seed:all
# 数据库修改密码
    use mysql
    set password for root@localhost = password('150324');
    flush privileges;
    mysql -u root -p

# 数据库
    mysql -u root -p
    password
    show databases;
    use vshop
    show tables;
    describe goods;
    select * from goods