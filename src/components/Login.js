/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import FormContainer from './common/formContainer';
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
        <p>Dont have an account<span> Signup</span></p>
      </FormContainer>
    );
  }
}

export default LoginComponet;
