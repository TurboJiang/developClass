import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

function Index() {
  return (
    <div>HomeIndex</div>
  )
}
function About() {
  return (
    <div>About</div>
  )
}

function User() {
  return (
    <div>User</div>
  )
}

function Protect() {
  return (
    <div> Protect </div>
  )
}

function Login() {
  return (
    <div> Login </div>
  )
}
/**
 * 进入页面前 鉴权 看可不可以进去
 * <PrivateRoute path="/user" component={} />
 */
function PrivateRoute (props) {
  const {path,component:Component} = props
  console.log(props)
  return (
    // 指定path : /user , Component : User
    <Route path={path} render={
      ()=>{
        return false ? <Component /> : <Redirect to={{ pathname:'/login'}} />
      }
    }>

    </Route>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          {/* ul>li*3>Link */}
          <ul>
            <li>
              <Link to="/">HomeIndex</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/user'>User</Link>
            </li>
            <li>
              <Link to='/protect'>Protect page</Link>
            </li>
          </ul>
          {/* true&false决定是否显示路由：动态路由 */}
          {/* exact component 精准匹配到组件 页面上的显示内容根据路由切换 */}
          {
            true ?
              <Route path="/" exact component={Index}></Route> :
              <div>no router</div>
          }
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute path="/user" component={User}></PrivateRoute>
          <Route path="/protect" render={() => {
            // 路由重定向
            return false ? <Protect /> : <Redirect to={{
              pathname: '/login',
              state: { from: '/protect' }
            }} />
          }}>
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
