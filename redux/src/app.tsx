// 根组件
import * as React from 'react';
// 抛出之后不需要写全路径
import { Header } from './components';
export const App: React.StatelessComponent<{}> = () => {
    return (
        <div className="container-fluid">
            <Header></Header>
        </div>
    )
}