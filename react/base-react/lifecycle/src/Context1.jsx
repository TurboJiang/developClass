import React from 'react'
// 16.x.x 返回一个Context对象有两个属性：theme、toggleTheme  生产者 消费者
const ThemeContext = React.createContext({
    theme:'darkgreen',
    toggleTheme:()=>{}
})
class MyButton extends React.Component{
    render () {
        return (
            // 需要使用Context中的数据
            <ThemeContext.Consumer>
                {
                    (value)=>{
                        return (
                            <button style={{backgroundColor:value.theme}} onClick={value.handleTogglePink}>
                                {this.props.children}
                            </button>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

class Message extends React.Component{
    shouldComponentUpdate() {
        // 阻止后代更新
        return false;
    }
    render () {
        return (
            <div>
                {this.props.text}
                <MyButton>delete</MyButton>
            </div>
        )
    }
}

class Context1 extends React.Component{
    constructor() {
        super()
        this.handleTogglePink = () =>{
            // 返回一个函数 setState会根据返回的值来更新state
            this.setState(state=>{
                return {
                    theme:'pink'
                }
            })
        }
        // 定义state 的初始状态
        // state = {} ——>静态属性 不需要实例化就能使用 就获取不到实例化的this.handleTogglePink
        this.state = {
            theme:'darkgreen',
            handleTogglePink:this.handleTogglePink
        }
    }
    handleToggleTheme=()=>{
        this.setState({
            theme:'darkblue'
        })
    }
    // handleTogglePink=()=>{
    //     this.setState({
    //         theme:'pink'
    //     })
    // }
    render () {
        const msgs = ['msg1','msg2','msg3']
        return(
            // provider 提供数据(state)的组件
            <ThemeContext.Provider value={this.state} >
                <button onClick={this.handleToggleTheme}>
                    toggle theme
                </button>
                {/* 将数组作为列表渲染 */}
                {
                    msgs.map((msg,i)=>{
                        return <Message text={msg} key={i} />
                    })
                }
            </ThemeContext.Provider>
        )
    }
}
export default Context1