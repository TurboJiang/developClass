/**
 * 防抖函数:多少毫秒触发什么事
 * func wait
 */
export function debounce(func, wait) {
    var result, timeout;
    return function () {
        // this + 参数 ！！！！
        var context = this;
        var args = arguments;
        // 进去之前都会忽略掉setTimeout 但最后一次不再点击之后拿到timeout的值
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            // 函数的返回值赋给result
            result = func.apply(this, args)
        }, wait);
        return result
    }
}
// 可用于修饰的 防抖
export function decDebounce(wait) {
    return function (target, key, descriptor) {
        var callBack = descriptor.value
        // 保证原来的功能实现 再将此增强
        var fn = debounce(callBack, wait)
        descriptor.value = fn
    }
}

export function decArrowDebounce(wait) {
    return function (target, key, descriptor) {
        //    拿到原来的
        var callBack = descriptor.initializer && descriptor.initializer();
        // 加强
        var fn = debounce(callBack, wait)

        // 修饰方法 改变value属性 
        // 修饰属性 改变get方法

        // descriptor.value改变原来的
        // return  {} 返回一个新的
        return {
            configurable:true,
            get:function() {
                return fn
            }
        }
    }
}
// 装饰类——>hoc 高阶组件 装饰整个组件
// 装饰class 
export function decDisplayName(displayname) {
    return function(target) {
        target.displayName = displayname
    }
}


// 箭头函数与普通函数的区别
class Base {
    // 原型链上的一个方法
    a() {
        console.log('a')
    }
    // 属性
    b = () => {
        console.log('b')
    }
}
const base = new Base()
console.log('base', base)