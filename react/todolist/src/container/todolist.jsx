import Todolist from '../component/todolist'
import { connect } from 'react-redux'
// 之所以写成两个 是因为  componnet 的todolist 是一个UI容器 只负责样式 不负责数据处理 container 负责数据处理

const mapStateToprops = (state) => {
  return {
    list: state.list,
    inputValue: state.inputValue
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    // 输入框的值 实施派发给store里面的reducer
    inputChange: (e) => {
      // console.log(e.target.value)
      const inputValue = e.target.value
      const action = {
        type: 'INPUT_CHANGE',
        inputValue
      }
      dispatch(action)
    },
    handleClick: (e) => {
      const action = {
        type: 'HANDLE_CLICK',
        inputValue: e
      }
      dispatch(action)
    },
    deletedItem: (e, index) => {
      const action = {
        type: 'ITEM_CHANGE',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToprops, mapDispathToProps)(Todolist)