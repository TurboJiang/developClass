// 三个状态对应store中的三个值 
export default (state = 'ALL', action) => {
    // dispatch action.type
    if(['ALL','ACTIVE','COMPLETED'].includes(action.type)){
        return action.type
    }
    return state
}