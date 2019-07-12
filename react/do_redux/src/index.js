// 模块化处理state
import { state } from './redux/state.js'
import { storeChange } from './redux/storeChange'
import { createStore } from './redux/createStore'

// 调用createStore来生成全局状态!!!
const { store, dispatch, subscribe } = createStore(state, storeChange)

// 管理状态，修改...  state全局状态  action{}
// function dispatch(state, action) {
//     // *状态的修改可预期的*
//     switch (action.type) {
//         case 'HEAD_COLOR':
//             state.head.color = action.color
//             break;
//         case 'BODY_TEXT':
//             state.body.text = action.text
//             break;
//         default:
//             break;
//     }
// }

function renderHead(state) {
    // 要求修改body时head函数不应该被渲染！！！renderApp()不应该全部执行 应该有针对性执行
    console.log('render head')
    const head = document.getElementById('head')
    head.innerText = state.text
    head.style.color = state.color
    // 共享状态之后 进行随意修改——>乱得很
    // state.body.text = '我是经过head修改的body'
}
function renderBody(state) {
    console.log('render body')
    const body = document.getElementById('body')
    body.innerText = state.text
    body.style.color = state.color
    // state.text = '我是经过修改的body'

}
// 通过函数将文件挂载上去
function renderApp(store, oldStore = {}) {
    // 比较新旧值 相等就证明状态没有改变不需要刷新
    if (store === oldStore) return;
    // 当store中head与旧的不一样时 渲染renderHead
    store.head !== oldStore.head && 
    renderHead(store.head) //生成了新的state
    store.body !== oldStore.body &&
    renderBody(store.body) // 接收的是没有更改过的state
}
// 需要形成订阅发布者模式  调用
subscribe((store,oldStore) => {
    renderApp(store,oldStore)
})
// 接收的是原状态 没有更新 但使用订阅发布模式时 store已经更新拿到的新状态
renderApp(store)
// 管理状态修改
dispatch({ type: 'BODY_TEXT', text: '我是经过(dispatch)head修改的body' })
// 更新状态之后再重新渲染一次 效率低 使用MVVM思想 哪个状态改变 通知其改变
// renderApp(store)


