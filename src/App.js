import React from 'react';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';

import './App.css'
import SignInAndSignUP from './pages/sign-in-and-sign-up/SignIn-SignOut';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/shop'} component={ShopPage} />
        <Route path={'/signin'} component={SignInAndSignUP} />
      </Switch>
    </div>
  );
}

export default App;
