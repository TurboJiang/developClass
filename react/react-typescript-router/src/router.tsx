// 打包是有顺序的 但是重复打包的不会打包
import * as React from 'react';
// switch中可以添加很多个路由 但只选择一个
import { Route, HashRouter, Switch } from 'react-router-dom'
// 根组件
import { App } from './app'
import { MembersPage, About } from './components'
// 进行约束  <{}>传参的地方  函数式组件
export const AppRouter: React.StatelessComponent<{}> = () => {
    // jsx
    return (
        // 路由组件：路由写在哪里 路由组件要写在哪里
        <HashRouter>
            <div className="container-fluid">
                <Route component={App} />
                {/* 只匹配一个路由 */}
                <Switch>
                    {/* exact主页 */}
                    <Route exact path="/" component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/members" component={MembersPage} />
                </Switch>
            </div>
        </HashRouter>
    );
}