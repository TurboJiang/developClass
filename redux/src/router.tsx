// 路由入口
import * as React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { App } from './app'
// 将Store提供出来
import { Provider } from 'react-redux'
import { store } from './store'
import { About, MembersPageContainer } from './components'

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="container-fluid">
                    <Route component={App} />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route  path="/members" component={MembersPageContainer} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}