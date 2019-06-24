// 向外输出env信息
const { env } = process;

const config = {
    port: env.PORT,
    host: env.HOST
};

module.exports = config