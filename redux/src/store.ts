import { Store, createStore } from 'redux'
import { state, State } from './reducers'
// 类型声明 Store<State>  Store单一状态树 类型State
export const store: Store<State> = createStore(
    state
)