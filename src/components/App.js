/* eslint-disable import/no-named-as-default */
import '@babel/polyfill';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import Login from '../containers/loginView';
import PageNotFound from './PageNotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
