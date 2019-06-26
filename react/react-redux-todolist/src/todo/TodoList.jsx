import React, { Component } from 'react'
import todos from '../reducer/todos';
import { connect } from 'react-redux'

class TodoList extends Component {
    state = {}
    render() {
        const { todos, toggleTo} = this.props
        return (
            <div>
                {
                    todos.map((todo, i) => {
                        return (
                            // 点击li标签时触发切换dispatch
                            <li key={i}
                                onClick={()=>{
                                    toggleTo(todo.id)
                                }}
                                style={{textDecoration:todo.completed ? 'line-through' : ''}}
                            >{todo.text}</li>
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log('渲染todos时候的type',state.filterType)
    return {
        // 数据联动 绑定三种状态
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleTo: id => dispatch({
            type: 'TOGGLE_TODO',
            id
        })
    }
}
// 绑定之后可以调用方法toggleTo
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)