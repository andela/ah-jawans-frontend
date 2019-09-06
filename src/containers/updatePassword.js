/* eslint-disable no-alert */
import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { changePassword } from '../redux/actions/passwordReset';
import { postDataThunk } from '../redux/thunks/index';

export class UpdatePassword extends Component {
  state = {
    passwordError: '',
    confirmationError: '',
    password1: '',
    password2: '',
    token: null,
  };

  componentDidMount() {
    const { token } = queryString.parse(this.props.location.search);
    this.setState({ token });
  }

  // eslint-disable-next-line class-methods-use-this
  componentWillReceiveProps(nextProps) {
    if (nextProps.resetPassword.passwordUpdate) {
      window.location.href = '/login';
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      passwordError: '',
      confirmationError: '',
    });
  };

  changePass = async (e) => {
    const { password1, password2 } = this.state;
    e.preventDefault();
    if (password1 !== password2) {
      window.alert('Passwords do not match', 'danger');
    } else {
      const password = this.state.password1;
      await this.props.postDataThunk(
        'post',
        `users/passwordreset/${this.state.token}`,
        changePassword,
        { password },
      );
    }
  };

  render() {
    const { passwordError, confirmationError } = this.state;
    return (
      <Card className='card'>
        <Link to='/' style={{ margin: '0 auto' }} />
        <h1 className='card__title'>Authors Haven</h1>
        <br />
        <h2 className='card__heading'>Update Password</h2>
        <form onSubmit={this.changePass}>
          <br />
          <h3 className='card__label'>Password</h3>
          <input
            className='card__input'
            type='password'
            onChange={this.handleChange}
            placeholder='Enter your password'
            id='password1'
          />
          <div className='card__passError'>{passwordError}</div>
          <br />
          <h3 className='card__label'>Confirm Password</h3>
          <input
            className='card__input'
            type='password'
            onChange={this.handleChange}
            placeholder='Enter password confirmation'
            id='password2'
          />
          <div className='card__confError'>{confirmationError}</div>
          <br />
          <button className='card__button' type='submit' name='submit'>
            Update
          </button>
        </form>
      </Card>
    );
  }
}

UpdatePassword.propTypes = {
  match: PropTypes.instanceOf(Object),
  changePassword: PropTypes.func,
  history: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
  resetPassword: PropTypes.func,
  passwordUpdate: PropTypes.func,
  setAlert: PropTypes.func,
  postDataThunk: PropTypes.func,
};

const mapStateToProps = (state) => ({
  updatedPassword: state.update,
  resetPassword: state.resetPassword,
});

const actionCreator = {
  postDataThunk,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(UpdatePassword);
