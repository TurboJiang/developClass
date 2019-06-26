import React, { Component } from 'react'
// connect 链接组件与store
import { connect } from 'react-redux'

class Addto extends Component {
    state = {}
    render() {
        let generateID = 1
        const { dispatch } = this.props;
        console.log(this.props)
        return (
            <div>
                {/* 表单接收 */}
                <form onSubmit={e => {
                    // 阻止表单默认提交刷新事件
                    e.preventDefault()
                    if (this.inputNode.value.trim()) {
                        // 若有值 则添加对象
                        generateID++;
                        dispatch({
                            type: 'ADD_TODO',
                            id: generateID,
                            text: this.inputNode.value.trim()
                        })
                    }
                }}>
                    {/* 使用原生的ref获取input节点 */}
                    <input type="text" ref={node => this.inputNode = node} />
                    <button type="submit">
                        addToDo
                    </button>
                </form>
            </div>
        )
    }
}

// 1.mapStatetooProps 将状态映射为props
// 2.mapDispatchToProps 将dispatch映射为props
// export default connect((state) => {
//     console.log('connect',state)
//     return {a:1}
//  }, (dispatch) => {
//      return {
//          b:()=>{
//              console.log('b')
//          }
//      }
//   })(Addto)
export default connect()(Addto)

