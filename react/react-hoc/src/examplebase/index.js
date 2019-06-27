// defineProperty(obj,key,{})
// Object.defineProperty(Base, 'add', {
//     value: () => { },
// })

// @log实现的具体过程
// descriptor 拿到了add方法的 descriptor
// function log(target, name, descriptor) {
//     // 拿到原来的值：add方法
//     const method = descriptor.value
//     // 增强value 重新定义value
//     descriptor.value = function (...args) {
//         console.log('log type add:')
//         return method(...args);
//     }
// }

// 返回一个函数
function log(logType) {
    return function log(target, name, descriptor) {
        // 拿到原来的值：add方法
        const method = descriptor.value
        // 增强value 重新定义value
        descriptor.value = function (...args) {
            console.log('log type add:'+logType)
            return method(...args);
        }
    }

}
// 修饰符 是一个函数
// @log log是一个函数
// @log('add') 也得是一个函数 返回一个函数
class Base {
    // @log('add')指定type 判断进行哪一个
    @log('add')
    add(a, b) {
        // console.log('log type add:')
        return a + b
    }
    @log('divide')
    divide(a, b) {
        return a / b
    }
}
const base = new Base()
console.log('add', base.add(1, 2))
console.log('divide',base.divide(4,2))
// 加日志 每个方法运行时添加一条日志
// 有了更好 没有也行的装饰器 @log 调用add是自行输出一条


export default base