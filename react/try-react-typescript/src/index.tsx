// typescript语法表达react组件

// 将bug在项目抛弃之前就报出来(划红线)
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HelloComponent } from './hello'
import { App } from './app'

ReactDOM.render(
    <div>
        <HelloComponent />
        <App />
        hello,TypeScript
    </div>,
    document.getElementById('root')
)