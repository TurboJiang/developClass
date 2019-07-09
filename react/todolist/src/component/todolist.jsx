import React from 'react'
import TodoItem from './todoItem'

class Todolist extends React.Component {
    render() {
        //解构从store里面挂载在props上的数据
        const { list, inputValue } = this.props
        return (
            <div>
                {/* 用户输入的时候，把用户输入的值上传到store里 */}
                <input value={inputValue} placeholder="请输入点什么吧" onChange={this.props.inputChange} />
                {/* 点击提交的时候，把从store里面的inputvlue 传给handleClick */}
                <button onClick={this.props.handleClick.bind(this, inputValue)} >提交</button>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                // 组件化思维，每一个循环项都当作一个组建 方便维护
                                <TodoItem content={item} key={index} index={index} deleted={this.props.deletedItem} />
                                // <li key={index} >{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Todolist