import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContainer from './common/FormContainer';
import Input from './common/input';
import '../assets/scss/components/login.scss';

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
        <br/>

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
        <br/>
        <br/>
        <p>Or Login with social media</p>
        <ul className='myform socialLogin'>
          <li><img src='/src/assets/images/facebook.svg' /></li>
          <li><img src='/src/assets/images/twitter.svg' /></li>
          <li><img src='/src/assets/images/google-logo.png' /></li>
        </ul>
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
