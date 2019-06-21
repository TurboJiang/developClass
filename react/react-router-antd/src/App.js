import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Layout from './page/Layout'
import 'antd/dist/antd.css'

function Table(){
 return (
   <div>Table</div>
 )
}

function Label(){
  return (
    <div>Label</div>
  )
 }

function App() {
  return (
    // 配置两次根路由 当根路由下配置了其他路由的 根路由就会无效 需要再配置一次根路由
    <Router>
      {/* 返回根路由 拿到Layout */}
      <Route path="/" component={Layout}>
        {/* 要配置根路由 */}
        <Route path="/" component={Layout} />
        {/* this.props.children 右边栏的页面内容 拿到Table*/}
        <Route path="/table" component={Table}></Route>
        {/* 拿到Label */}
        <Route path="/label" component={Label}></Route>
      </Route>
    </Router>
  )
}

export default App;
