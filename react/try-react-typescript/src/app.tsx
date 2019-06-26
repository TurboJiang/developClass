import * as React from 'react';
import { Header, About } from './components'

// App是StatelessComponent类型的react组件  <{}>接收的传参的类型
export const App: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <Header />
            <About />
            <h3>App</h3>
        </div>
    )
}