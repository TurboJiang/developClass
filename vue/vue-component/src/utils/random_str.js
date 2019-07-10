export default function (len = 32) {
    const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const maxPrs = $chars.length;
    let arr = ""
    // 随机取32个
    for (let i = 0; i < len; i++) {
        // charAt() 方法可返回指定位置的字符 长度不减一 防止有小数 向下取整
        arr += $chars.charAt(Math.floor(Math.random()*maxPrs))
        // arr += $chars[Math.floor(Math.random()*maxPrs)]
    }
    return arr
}
