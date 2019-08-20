/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Form from '../common/FormContainer';
import TextInput from '../common/TextInput';
import SocialLogin from '../socialLogin';

class SignupComponent extends Component {
  render() {
    return (
      <div className="signup-form">
      <Form onSubmit={this.props.onSubmit}>
        <div className="form-group">
        <TextInput
            value={this.props.username}
            name="username"
            type="text"
            placeholder="Username..."
            onChange={this.props.onChange}
            className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
            />
        </div>
       <div className="form-group">
       <TextInput
            value={this.props.email}
            name="email"
            type="email"
            placeholder="Email..."
            onChange={this.props.onChange}
            className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
          />
       </div>
       <div className="form-group">
       <TextInput
            value={this.props.password}
            name="password"
            type="password"
            placeholder="Password..."
            onChange={this.props.onChange}
            className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
          />
       </div>
       <button type="submit" className="btn btn-default sumbit-btn">Signup</button>
        <br />
        <div className="form-footer">
        <p>Or signup with social media</p>
          <SocialLogin/>
          <p>
            You have an account?
            <span>
              <a href="/login">SIGN IN</a>
            </span>
          </p>
        </div>
      </Form>
      </div>
    );
  }
}
export default SignupComponent;
