// 状态树 包括状态、状态的改变storeChange(=reducer)
export const createStore = (state, storeChange) => {
    const listeners = []; //页面的组件
    const store = state || {};
    // 订阅发布 通知状态发生改变 将要与状态有关的地方放进数组中
    // listen是一个callback
    const subscribe = (listen) => listeners.push(listen)

    // 将携带action{}的dispatch交给storeChange
    // const dispatch = (action) => storeChange(store, action)

    // 订阅发布者模式
    const dispatch = (action) => {
        // 执行storeChange会生成newStore
        const newStore = storeChange(store, action);
        // 将每个组件都循环一次
        listeners.forEach(item => {
            // 状态发生改变之后 进入listners数组中
            item(newStore,store)//newStore新的store，store旧的store
            // 比较新旧状态 发生改变就更新 没有就不用
        })
    }
    // 负责向外输出store,dispatch(需要模块化处理，不可能写在页面上),subscribe
    return { store, dispatch, subscribe }
}