import { MemberEntity } from '../model'
// 对状态的计算 reducer 纯函数只要运行就会返回初始状态 根据action会返回新的状态
// state 初始值  state: MemberEntity[] = []
// let state = {}
export const membersReducer = (state: MemberEntity[] = [], action) => {
    switch (action.type) {
        case 'FETCH_MEMBER_COMPLETED':
            return action.payload
    }
    return state
}