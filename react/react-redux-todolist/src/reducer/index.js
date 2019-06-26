// reducer入口文件 combineReducers组合模块
import { combineReducers } from 'redux'
// 两个reducer
import todos from './todos'
import filterReducer from './filter'

export default combineReducers({
    todos,
    filterType: filterReducer
})