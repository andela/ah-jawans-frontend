/* eslint-disable import/no-named-as-default */
import '@babel/polyfill';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Signup from './auth/signupContainer';
import Login from './auth/loginView';
import Profile from '../components/Profile';
import '../assets/css/style.scss';
import '../assets/scss/main.scss';
import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';
import ReadArticle from '../components/article/readArticle';
import PasswordReset from './passwordReset';
import UpdatePassword from './updatePassword';
import CreateArticle from '../components/article/ArticleComponent';
import UpdateArticle from '../components/article/updateArticle';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/updateArticle/:articleId" component={UpdateArticle} />
      <Route path="/readArticle/:id" component={ReadArticle} />
      <Route path="/createArticle" component={CreateArticle} />
      <Route path="/passwordReset" component={PasswordReset} />
      <Route path="/updatePassword" component={UpdatePassword} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
