/* eslint-disable no-empty */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginComponet from '../components/Login';
import '../assets/scss/components/login.scss';
import loginUserAction from '../redux/actions/loginAction';
import Error from '../components/common/errors';
import postDataThunk from '../redux/thunks';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = (e) => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.state;
    await this.props.postDataThunk('post', 'users/login', loginUserAction, user);
    if (this.props.userCredentials.errors) {
    } else { this.props.history.push('/'); }
  };

  render() {
    return (
      <div className="container">
          {(this.props.userCredentials.errors) && <Error
        errors = {this.props.userCredentials.errors}
        />}
        <div className="row">
          <div className="col loginLeftSide">
            <h1>Login</h1>
            <h5>Authors Haven</h5>
            <img className='images' src='/src/assets/images/computer-hands-laptop-2115217.jpg'/>
          </div>
          <div className="col-md-6 myForm">
            <h4> Signin </h4>
            <LoginComponet
            onChange={this.handleChange}
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
  userCredentials: state.userCredentials.userCredentials,
  errors: state.errors,
});

const actionCreator = {
  postDataThunk,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(Login);
