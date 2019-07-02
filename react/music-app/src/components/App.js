import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import Search from './search/Search'
import './App.styl';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          header
        </header>
        <div className="music-tab">
          {/* div.tab-item*3>NavLink.nav-link>span */ }
          <div className="tab-item">
            <NavLink className="nav-link" to="/recommend">
              <span>推荐</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/ranking">
              <span>排行榜</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/search">
              <span>搜索</span>
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          <Switch>
            {/* 靠路由管理的部分 */ }
            <Route path="/recommend" component={ Recommend }></Route>
            <Route path="/ranking" component={ Ranking }></Route>
            <Route path="/search" component={ Search }></Route>
            <Route path="/" component={ Recommend }></Route>
            {/* <Redirect from="/" to="/recommend" /> */ }
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;