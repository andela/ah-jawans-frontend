import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Home from './Home';
import Profile from './Profile';

const Routes = ({ isAuth }) => (
  <Switch>
    <Route exact path="/" render={(props) => <Home {...props} isAuth={isAuth} />} />
    <Route exact path="/profile" render={(props) => <Profile {...props} />} />
  </Switch>
);

Routes.propTypes = { isAuth: PropTypes.bool };
Routes.defaultProps = { isAuth: false };

export const mapStateToProps = ({ user: { isAuth } }) => ({ isAuth });
export default connect(mapStateToProps)(Routes);
