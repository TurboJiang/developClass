import React from 'react'

class TodoItem extends React.Component {
    
    render(){
        const {content,deleted,index} = this.props
        return(
            <li
            // 通过回调的方式，把点击的li在list中的位置传给 deleted方法
            onClick = {(e) => {
                deleted(e,index)
            }}
             > {content}</li>
        )
    }
}
export default TodoItem;