// 一个actions
import { memberAPI } from '../../../api/member'
import { MemberEntity } from '../../../model'
import { members } from '../../../api/member/mockData';

// 获取members的action  并进行定义
export const fetchMembersAction = () => (dispatch) => {
    // ajax api  调用api里的fetchMembers
    memberAPI.fetchMembers().then(members => {
        // 交给下一个动作
        dispatch(fetchMembersCompleted(members))
    })
}
// actions如果返回的是一个带有type的对象 会去reducer重新计算 reducer = state + mutation
const fetchMembersCompleted = (members: MemberEntity[]) => ({
    type: 'FETCH_MEMBER_COMPLETED',
    payload: members
    // 会重新计算
})