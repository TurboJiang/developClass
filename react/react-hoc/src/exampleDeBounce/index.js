import React, { Component } from 'react'
// 简单函数debounce   修饰decDebounce
import { debounce, decDebounce, decArrowDebounce, decDisplayName} from './util'
// 防抖(关键的请求加防抖)

// decDisplayName加了一个静态属性 displayName
@decDisplayName('CustomExampleDebounce')
class exampleDeBounce extends Component {
    // 修饰方法（普通函数）
    @decDebounce(1000)
    handleSubmit() {
        console.log('submit request')
    }

    // handleSubmit = debounce(function() {
    //     console.log('request submit')
    // },1000)

    // 箭头函数使用 decArrowDebounce才会有防抖效果
    // @decDebounce(1000)
    // handleBuy = () => {
    //     console.log('buy now')
    // }

    // 修饰属性（箭头函数）
    @decArrowDebounce(1000)
    handleBuy = () => {
        console.log('buy now')
    }
    render() {
        // 两个函数已经被debounce包装过了
        console.log(this.handleSubmit);
        console.log(this.handleBuy)
        return (
            <div>
                <button onClick={ this.handleSubmit }>
                    提交订单
                </button>
                <button onClick={ this.handleBuy }>
                    立即购买
                </button>
            </div>
        )
    }
}
export default exampleDeBounce