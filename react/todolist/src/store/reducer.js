const defaultState = {
    list: ['Learning React','Learning Vue','Learning JS','Learning CSS'],
    inputValue: ''
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE': {
            const newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.inputValue
            return newState
        }
        case 'HANDLE_CLICK': {
            const newState = JSON.parse(JSON.stringify(state))
            newState.list.push(action.inputValue)
            newState.inputValue = ''
            return newState
        }
        case 'ITEM_CHANGE': {
            const newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index,1)
            return newState            
        }
        default:
    }
    return state
}