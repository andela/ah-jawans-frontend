/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Error from '../components/common/errors';
import signupUserAction from '../redux/actions/signup.actions';
import postDataThunk from '../redux/thunks/index';
import SignupComponent from '../components/pages/Signup';

export class Signup extends Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
    },
  };

  handleInputChange = (e) => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.state;
    await this.props.postDataThunk('post', '/users', signupUserAction, user);
    if (!this.props.signupSuccess.errors) this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
          {this.props.signupSuccess.errors && <Error
        errors = {this.props.signupSuccess.errors}
        />}
        <div className="row">
          <div className="col-7 container__leftSide">
            <h1>Join us</h1>
            <h5>Authors Haven</h5>
            <img
              className="container__images"
              src="/src/assets/images/pexels-photo.jpeg"
            />
          </div>
          <div className="col-5 container__rightSide">
            <h4> Sign Up </h4>
            <SignupComponent
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            user= {this.state.user}
            />
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signupSuccess: state.signupSuccess.signupSuccess,
  errors: state.errors,
});

const actionCreator = {
  postDataThunk,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(Signup);
