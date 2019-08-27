/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import LoginComponet from '../../components/auth/Login';
import '../../assets/scss/components/login.scss';
import loginUserAction from '../../redux/actions/auth/loginAction';
import Error from '../../components/common/errors';
import postDataThunk from '../../redux/thunks';
import socialLoginAction from '../../redux/actions/auth/sosialLoginAction';

export class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  };

  componentDidMount() {
    const { token } = queryString.parse(this.props.location.search);
    socialLoginAction({ token });
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
    if (!this.props.userCredentials.errors) this.props.history.push('/profile');
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

Login.propTypes = {
  postDataThunk: PropTypes.func,
  userCredentials: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  socialLogin: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userCredentials: state.userCredentials.userCredentials,
  errors: state.errors,
});

const actionCreator = {
  postDataThunk, socialLoginAction,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(Login);
