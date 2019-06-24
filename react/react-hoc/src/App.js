import React from 'react';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart'
import WithLogin from './WithLogin'
import './App.css';
import withLogin from './WithLogin';

const WithLoginStatus = withLogin(LoginStatus)
const WithShopCart = withLogin(ShopCart)

function App() {
  return (
    // <React.Fragment>
    //   <WithLoginStatus />
    //   <WithShopCart  />
    // </React.Fragment>
    <>
      <LoginStatus/>
      <ShopCart/>
    </>
  )
}

export default App;
