import lodash from 'lodash-es'
import style from './index.css'
const sync = function (){
    console.log('sync')
    document.getElementById('app').innerHTML = `<h1 class=${style.test}>css module</h1>`
}
const testIsArray = function(arg) {
    console.log('is Array')
    // tree shaking出事了！！不敢分析lodash代码，直接选择了打包哩！
    console.log(lodash.isArray(arg))
}
export {
    sync,
    // 暴露出去但未使用 不会被打包
    testIsArray
}