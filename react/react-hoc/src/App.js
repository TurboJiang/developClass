import React from 'react';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
// import WithLogin from './WithLogin';
import examplebase from './examplebase/index'
import ExampleMobx from './exampleMobx/index'
import ExampleDeBounce from './exampleDeBounce/index'
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
    <>
      <LoginStatus />
      <ShopCart />
      <ExampleMobx />
      <ExampleDeBounce />
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2"/> */}
    </>
  )
}

export default App;
