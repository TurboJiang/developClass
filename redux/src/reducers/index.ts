// state 
import { combineReducers } from 'redux'
import { MemberEntity } from '../model'
import { membersReducer } from './members'

// 定义State类型
export interface State {
    members: MemberEntity[]
}

// 约束state是State类型的
export const state = combineReducers<State>({
    members: membersReducer
})