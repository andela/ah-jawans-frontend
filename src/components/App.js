/* eslint-disable import/no-named-as-default */
import '@babel/polyfill';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Profile from './Profile';
import '../assets/css/style.scss';
import Signup from '../containers/auth/signupContainer';
import Login from '../containers/auth/loginView';
import '../assets/scss/main.scss';
import Home from './Home';

import PageNotFound from './PageNotFound';
import PasswordReset from '../containers/passwordReset';
import UpdatePassword from '../containers/updatePassword';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/passwordReset" component={PasswordReset} />
            <Route path="/updatePassword" component={UpdatePassword} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;
