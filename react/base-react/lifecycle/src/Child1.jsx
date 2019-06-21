import React from 'react'

class Child1 extends React.Component{
    state = {
        a:1
    }
    /**
     * 16.x.x之前将state与props混在一起
     * Willmount(props) 再setState
     */
    /**
     * 更新state
     * 根据返回值 return {}
     * 不更新 return null
     */
    static getDerivedStateFromProps (props,state) {
        console.log('getDerivedStateFromProps')
        // 将所有的props+state混在一起——>this.state
        return {
            ...props,
            ...state
        }
        // return null
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    // 更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return 9;
    }
    // 15.x.x a：undifined 
    // 16.x.x a：getSnapshotBeforeUpdate()
    componentDidUpdate(preProps,preState,a) {
        console.log('componentDidUpdate',a)
    }
    // 修改state
    handleStateChange=()=>{
        this.setState({
            a:10
        })
    }
    render () {
        console.log('渲染时候 state',this.state)
        return (
            <div>
                <button onClick={this.handleStateChange}>change state</button>
                child1 component
                {/* 通过props传count */}
                count:{this.props.count}
            </div>
        )
    }
}
export default Child1