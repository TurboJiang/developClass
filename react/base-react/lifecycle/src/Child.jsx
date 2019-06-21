import React from 'react'

//  before 16.x.x
class Child extends React.Component{
    state = {
        childCount:0
    }
    handleChildCountChange () {
        let { childCount } = this.state;
        childCount ++;
        this.setState({
            childCount
        })
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount () {
        console.log('componentDidMount')
        // 定时器在切换组件之后依旧存在 需要进行清除  在切换周期中进行清除
        this.interval = setInterval(() => {
            console.log('Child setInterval')
        }, 1000);
        
    }
   
    // 组件是否要更新 控制不必要的更新达到性能优化 
    shouldComponentUpdate (nextProps,nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps,nextState)
        // 当新的props.count不等于原props.count
        if(nextProps.count !==this.props.count){
            return true
        }
        // false:不进行更新  true:要求更新 
        return true 
    }
     // props更新
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    componentWillUpdate () {
        console.log('componentWillUpdate')
    }
    componentDidUpdate () {
        console.log('componentDidUpdate')
    }
    // 不显示组件时触发
    componentWillUnmount () {
        console.log('componentWillUnmount')
        clearInterval(this.interval)
    }
    render () {
        const {count} = this.props
        const {childCount} = this.state
        console.log('render function')
        return (
            <div>
                <button onClick={this.handleChildCountChange.bind(this)}>child component state change</button>
                <p>child Component</p>
                count:{count}
                childCount:{childCount}
            </div>
        )
    }
}
export default Child