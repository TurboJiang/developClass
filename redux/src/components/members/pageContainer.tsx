import * as React from 'react';
import { connect } from 'react-redux'
import { MembersPage } from './page'
import { fetchMembersAction } from './actions/fetchMembers';

// 箭头函数返回一个对象 需要带上一个括号
// 接收connect传来的参数 state
// 将全局共享的状态在这个组件中作为props传出去
const mapStateToProps = (state) => ({
    // 解构
    members: state.members
})
const mapActionsToProps = (dispatch) => ({
    fetchMembers: () => dispatch(fetchMembersAction())
})

export const MembersPageContainer = connect(mapStateToProps,mapActionsToProps)(MembersPage);