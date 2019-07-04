import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router,Route,Switch,Redirect,NavLink} from 'react-router-dom'
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import Search from './search/Search'
import './App.styl';
import '../assets/stylus/reset.styl'
import '../assets/stylus/font.styl'

function App() {
  return (
    <Router>
      <div className='app'>
        <header className='app-header'>
          header
        </header>
        <div className='music-tab'>
        <div className="tab-item">
          <NavLink className="nav-link" to='/recommend'><span>推荐</span></NavLink>
        </div>
        <div className="tab-item">
          <NavLink className="nav-link" to='/ranking'><span>排行</span></NavLink>
        </div>
        <div className="tab-item">
          <NavLink className="nav-link " to='/search'><span>搜索</span></NavLink>
        </div>
        </div>
        <div className='music-view'>
          <Route path='/recommend' component={Recommend}></Route>
          <Route path='/ranking' component={Ranking}></Route>
          <Route path='/search' component={Search}></Route>
          <Redirect from='/' to='/recommend'></Redirect>
        </div>
      </div>
    </Router>
  );
}

export default App;
