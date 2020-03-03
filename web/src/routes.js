import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SpotNew from './pages/SpotNew';
import UserNew from './pages/UserNew';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/spotnew" component={SpotNew} />
        <Route path="/usernew" component={UserNew} />
      </Switch>
    </BrowserRouter>
  );
}