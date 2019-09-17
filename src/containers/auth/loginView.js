import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import computerHand from '../../assets/images/computerHand.jpg';
import LoginComponet from '../../components/auth/Login';
import '../../assets/scss/components/_Signup.scss';
import loginUserAction from '../../redux/actions/auth/loginAction';
import { postDataThunk } from '../../redux/thunks';
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
    if (!this.props.userCredentials.errors) {
      const {
        userCredentials: {
          data: {
            username, token, id, image,
          },
        },
      } = this.props;
      localStorage.setItem('username', username);
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
      localStorage.setItem('image', image);
      this.props.history.push('/');
    } else {
      toast.error(this.props.userCredentials.errors);
    }
  };

  render() {
    return (
    <div className="container h-100 main">
      <div className="row">
        <div className="col-md-7 col-sm-7 main-content">
          <div className="main__leftSide">
           <h1>Login</h1>
           <h5>Authors Haven</h5>
              <img className="img-responsive main__images" src={computerHand} />
            </div>
          </div>
          <div className="col-md-5 col-sm-5">
            <LoginComponet
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              user={this.state.user}
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
