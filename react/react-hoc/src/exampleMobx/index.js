import React, { Component } from 'react'
import { observable, action, computed, autorun} from 'mobx'
import { observer } from 'mobx-react';

let id = 0
// 数据:创建应用状态
// 任何可以从应用状态中推导出来的东西，都应该自动地推导出来
// {text:'',completed:false,id:}
class Store {
    @observable todos = [];
    @action
    addTodo(text) {
        this.todos.push({
            text,
            completed: false,
            id: id++
        })
    }
    @action
    toggleTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id)
        this.todos[index].completed = !this.todos[index].completed
    }
    // 根据现有的状态或其它计算值衍生出的值
    @computed
    get totalNumber() {
        return this.todos.length
    }
    @computed
    get completedNumber() {
        return this.todos.filter(todo => todo.completed).length
    }
}
const store = new Store()
// 只有获取到值的时候才会运行
// autorun 只会观察在执行提供的函数时所使用的数据
autorun(()=>{
    console.log('autorun')
    const todos = store.todos
    localStorage.setItem('todos',JSON.stringify(todos))
})
// 组件
@observer
class TodoList extends Component {
    handleSubmit = () => {
        const value = this.inputNode.value.trim();
        if (value) {
            store.addTodo(value)
        }
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" ref={ (node) => this.inputNode = node } />
                    <button onClick={ this.handleSubmit }>提交</button>
                </div>
                <ul>
                    {
                        store.todos.map((todo, index) => {
                            return <li key={ index }
                                onClick={ () => {
                                    store.toggleTodo(todo.id)
                                } }
                                style={ { textDecoration: todo.completed ? 'line-through' : '' } }>
                                { todo.text }
                            </li>
                        })
                    }
                </ul>
                {
                    store.completedNumber
                }/
                {
                    store.totalNumber
                }
            </div>
        )
    }
}
export default TodoList