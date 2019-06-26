// applyMiddleware注册使用中间键
const { createStore, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const reducer = require('./reducer/index');
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
store.subscribe(() => {
    console.log('sore change', store.getState())
})
store.dispatch({
    type: 'ADD_FILM',
    id: 0,
    name: '唐人街探案'
})
store.dispatch((dispatch) => {
    setTimeout(() => {
        dispatch({
            type: 'DELETE_FILM',
            id: 0,
        })
    },3000)
})
console.log(store.getState());