import React from 'react';
import { Provider } from 'react-redux'
import  store from './store/store'
import Todolist from './container/todolist'

function App() {
  return (
    // Provider包含的子组件都能共享store 的数据
    <Provider store={store}>
     <Todolist />
    </Provider>
  );
}

export default App;
