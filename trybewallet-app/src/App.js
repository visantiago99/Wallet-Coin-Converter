import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <h1>Hello, TrybeWallet!</h1>
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
        <Route exact path="/carteira" render={ () => <Wallet /> } />
      </Switch>
    </div>
  );
}

export default App;
