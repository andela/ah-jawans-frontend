import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContainer from './common/formContainer';
import Input from './common/input';
import '../assets/scss/components/login.scss';
import SocialLogin from './socialLogin';


class LoginComponet extends Component {
  render() {
    return (
      <FormContainer onSubmit={this.props.onSubmit}>
        <Input
          type="text"
          name="email"
          className="form-control col-md-10 border-top-0 border-left-0 border-right-0 rounded-0"
          placeholder="Email"
          value={this.props.email}
          onChange={this.props.onChange}
        />
        <br />

        <Input
          type="password"
          name="password"
          className="form-control col-md-10 border-top-0 border-left-0 border-right-0 rounded-0"
          placeholder="Password"
          value={this.props.password}
          onChange={this.props.onChange}
        />

        <br/>
        <button type="submit" className="button">Signin</button>
        <br/><br/>
        <p><a href="/passwordReset">Forgot Password ?</a> </p><br/>
        <p>Or Login with social media</p>
        <SocialLogin/>
        <p>Dont have an account<span> <a href= '/signup'>Signup</a> </span></p>
      </FormContainer>
    );
  }
}

LoginComponet.propTypes = {
  onSubmit: PropTypes.func,
  email: PropTypes.string,
  onChange: PropTypes.func,
  password: PropTypes.string,
};

export default LoginComponet;
