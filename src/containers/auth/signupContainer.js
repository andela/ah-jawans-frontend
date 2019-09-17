/* eslint-disable no-irregular-whitespace */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import signupUserAction from '../../redux/actions/auth/signup.actions';
import { postDataThunk } from '../../redux/thunks/index';
import SignupComponent from '../../components/auth/Signup';
import computerHand from '../../assets/images/computerHand.jpg';
import socialLoginAction from '../../redux/actions/auth/sosialLoginAction';
import '../../assets/scss/components/_Signup.scss';

export class Signup extends Component {
  componentDidMount() {
    const { token } = queryString.parse(this.props.location.search);
    socialLoginAction({ token });
  }

  state = {
    user: {
      username: '',
      email: '',
      password: '',
    },
  }

  handleInputChange = (e) => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.state;
    await this.props.postDataThunk('post', '/users', signupUserAction, user);
    if (!this.props.signupSuccess.errors) {
      this.props.history.push('/login');
    } else if (this.props.errors) {
      toast.error(this.props.signupSuccess.errors.email);
      toast.error(this.props.signupSuccess.errors.username);
      toast.error(this.props.signupSuccess.errors.password);
      toast.error(this.props.signupSuccess.errors);
    }
  }

  render() {
    return (
      <div className="container h-100 main">
        <div className="row"><div className="col-md-7 col-sm-7 main-content">
          <div className="main__leftSide">
            <h1>Join us</h1>
            <h5>Authors Haven</h5>
            <img className="im-responsive main__images" src={computerHand} />
          </div>
        </div>
          <div className="col-md-5 col-sm-5">
            <SignupComponent
              onChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
              user={this.state.user}
            />
          </div>
        </div>
      </div>
    );
  }
}
Signup.propTypes = {
  location: PropTypes.object,
  socialLogin: PropTypes.func,
  signupSuccess: PropTypes.object,
  postDataThunk: PropTypes.func,
  history: PropTypes.object,
  errors: PropTypes.func,
};

const mapStateToProps = (state) => ({
  signupSuccess: state.signupSuccess.signupSuccess,
  errors: state.errors,
});

const actionCreator = {
  postDataThunk,
  socialLoginAction,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(Signup);
