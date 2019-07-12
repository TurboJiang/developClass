export const createStore = (reducer, preloadedState) => {
    const listeners = []; //页面的组件
    const store = state || {};
    const subscribe = (listen) => listeners.push(listen)
    const dispatch = (action) => {
        const store = reducer(store, action);
        listeners.forEach(item => {
            item()
        })
    }
    const getState = () => {
        return store
    }
    return { store, dispatch, subscribe, getState }
}