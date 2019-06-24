const models = require('../models')
const GROUP_NAME = 'shops'

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            // 取出数据 实行sql 
            const { rows: results, count: totalCount } = await models.shops.findAndCountAll({
                attributes: [
                    'id',
                    'name'
                ],
                // 2行
                limit: 2,
                // 分页
                offset: 0
            })
            // mvc中的 controller
            reply({
                results,
                totalCount
            })
        }
    }
]