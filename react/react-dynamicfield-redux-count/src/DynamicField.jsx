import React from 'react'
import { Input, Button, Divider } from 'antd'

function Field(props) {
    const { value, index } = props
    return (
        <div>
            <Divider />
            {/* 表单的事件是父级的 数据也全都在父级中 子组件只需要获取就行 */}
            <div>
                姓名:<Input value={value.name} placeholder="姓名" onChange={(e) => {
                    props.onChange(e.target.value, 'name', index)
                }} />
            </div>
            <div>
                地址:<Input value={value.address} placeholder="地址" onChange={(e) => {
                    props.onChange(e.target.value, 'address', index)
                }} />
            </div>
            <Button type="primary" onClick={()=>{
                // 接收父组件的事件 告知删除的哪一项
                props.onDelete(index);
            }}>删除</Button>
        </div>

    )
}

class DynamicField extends React.Component {
    state = {
        lists: [
            {
                name: '',
                address: ''
            }
        ]
    }
    // 值、所属的属性值（name、address）、索引
    handleChange = (value, key, i) => {
        let lists = this.state.lists.slice(0)
        // 替换原来的值 在显示区域
        const obj = lists[i]
        const newObj = {
            // 将旧值打散
            ...obj,
            // [key] 变量 ->name、address 传进来的新值
            [key]: value
        }
        // 新旧值组合
        lists[i] = newObj
        this.setState({
            lists
        })
        console.log(lists)
    }
    handleDelete=(i)=>{
        let lists = this.state.lists.slice(0)
        lists.splice(i,1);
        this.setState({
            lists
        })        
    }
    handleAddField=()=>{
        let lists = this.state.lists.slice(0)
        // 再添加一个框
        lists.push({
            name:'',
            address:''
        })  
        this.setState({
            lists
        })      
    }
    render() {
        const { lists } = this.state
        return (
            <div>
                {
                    lists.map((list, i) => {
                        return <Field key={i} value={list} onChange={this.handleChange} onDelete={this.handleDelete} index={i} />
                    })
                }
                <Button type="primary" onClick={this.handleAddField}>添加</Button>
            </div>
        )
    }
}
export default DynamicField