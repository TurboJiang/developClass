// mvc model层 将mysql 数据以row的 存储 映射成对像 Object
// orm sequelize


// 再次定义  映射
module.exports = (sequelize, DataTypes) => sequelize.define(
    'shops',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        thumb_url:DataTypes.STRING
    },
    // 写明映射的表名
    {
        tableName:'shops'
    }
)