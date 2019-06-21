import React from 'react';
import Child from './Child'
import Child1 from './Child1'
import Context from './Context'
import Context1 from './Context1'
import './App.css';

class App extends React.Component {
  constructor() {
    // 继承原组件的属性
    super()
    // 定义方法 对象ref
    this.objRef = React.createRef();
  }
  state = {
    count: 0,
    showChild: true
  }
  handleChildPropsChange() {
    let { count } = this.state
    count++;
    this.setState({
      count
    })
  }
  handleToggleChild = () => {
    let { showChild } = this.state
    this.setState({
      showChild: !showChild
    })
  }
  // 当dom结构挂载到页面上 拿到节点
  componentDidMount() {
    this.refs.stringRef.innerHTML = 'new String Ref'
    this.methodRef.innerHTML = 'new Method Ref'
    // 将真实的ref节点挂载到objRef的current属性上 
    this.objRef.current.innerHTML = 'new Object Ref'
  }
  render() {
    const { count } = this.state;
    const { showChild } = this.state
    return (
      <div>
        {/* ref可以是字符串还可以是回调函数 还可以是对象 */}
        <span ref="stringRef">react ref</span>
        <span ref={(ref) => { this.methodRef = ref }}>method ref</span>
        <span ref={this.objRef}>object ref</span>
        {/* react innerHTML */}
        <div dangerouslySetInnerHTML={
          {__html:`<strong>strong</strong>`}
        }>
        </div>
        <button onClick={this.handleChildPropsChange.bind(this)}>child component props change</button>
        <button onClick={this.handleToggleChild}>toggle child</button>
        {
          !showChild ?
            <Child count={count} /> : <Child1 count={count} />
        }
        <p>react 15.x.x</p>
        <Context>
          <p>姓名：刘昊然</p>
          <p>年龄：21</p>
        </Context>
        <p>react 16.x.x</p>
        <Context1 />
      </div>
    )
  }
}

export default App;
