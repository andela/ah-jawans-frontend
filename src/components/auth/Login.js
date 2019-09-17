/* eslint-disable no-irregular-whitespace */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContainer from '../common/formContainer';
import Input from '../common/input';
import '../../assets/scss/components/_Signup.scss';
import SocialLogin from './socialLogin';

class LoginComponet extends Component {
  render() {
    return (
      <div className="signup-form">
        <h4> Signin </h4>
        <FormContainer onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <Input
              value={this.props.email}
              name="email"
              type="email"
              placeholder="Email..."
              onChange={this.props.onChange}
              className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
            />
          </div>
          <div className="form-group">
            <Input
              value={this.props.password}
              name="password"
              type="password"
              placeholder="Password..."
              onChange={this.props.onChange}
              className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-default sumbit-btn">Signin</button>
          <br />
          <div className="form-footer">
            <p><a href="/passwordReset">Forgot Password ?</a> </p>
            <p>Or Login with social media</p>
            <SocialLogin />
            <p>Dont have an account<span> <a href='/signup'>Signup</a> </span></p>
          </div>
        </FormContainer>
      </div>
    );
  }
}

LoginComponet.propTypes = {
  onSubmit: PropTypes.func,
  email: PropTypes.string,
  onChange: PropTypes.func,
  password: PropTypes.string,
};

export default LoginComponet;
