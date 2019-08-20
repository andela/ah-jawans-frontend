/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '@babel/polyfill';
import Home from './Home';
import Signup from '../containers/signupContainer';
import PageNotFound from './PageNotFound';
import '../assets/scss/main.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
