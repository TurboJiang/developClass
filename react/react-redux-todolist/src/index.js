import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducer from './reducer/index'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 整个项目挂载的地方
// 创建应用状态
const store = createStore(reducer)
console.log('store', store.getState())
// provider 将store 的数据放到全局的位置
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// 监听到之后再重新挂载一次
// store.subScribe(() => {
//     ReactDOM.render(<App />, document.getElementById('root'));
// })
// 创建store 再放进Provider
// store.dispatch({})

serviceWorker.unregister();
