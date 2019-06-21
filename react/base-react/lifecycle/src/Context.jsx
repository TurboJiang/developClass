import React from 'react'
import propTypes from 'prop-types'
// 孙：在MyButton拿到Context中的color 跨过Message
class MyButton extends React.Component{
    render () {
        return (
            <button style={{backgroundColor:this.context.color}}>
                {this.props.children}
            </button>
        )
    }
}
MyButton.contextTypes = {
    color:propTypes.string
}
// 子
class Message extends React.Component{
    render () {
        return (
            <div>
                {this.props.text}
                <MyButton>delete</MyButton>
            </div>
        )
    }
}
// 父
class Context extends React.Component{
    state = {
        msgs:['msg1','msg2','msg3'],
        theme:'darkorange'
    }
    getChildContext(){
        // return {color:'darkgreen'}
        return {color:this.state.theme}
    }
    handleToggleTheme=()=>{
        this.setState({
            theme:'darkblue'
        })
    }
    // bug:不能切换组件时 主题无法更改
    shouldComponentUpdate(){
        return false;
    }
    render () {
        const msgNodes = this.state.msgs.map((msg,i)=>{
            return (<Message text={msg} key={i} />)
        }) 
        return (
            <div>
                <button onClick={this.handleToggleTheme}>切换主题</button>
                {/* 让用户在自定义属性 */}
                {this.props.children}
                {msgNodes}
            </div>
        )
    }
}
// 给Context的属性设定类型
Context.childContextTypes = {
    color:propTypes.string
}
// raect 提供了一个类型的npm 包
export default Context
