/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { requestPasswordRequest } from '../redux/actions/passwordReset';
import '../assets/scss/components/__passwordReset.scss';
import { postDataThunk } from '../redux/thunks';

export class PasswordReset extends Component {
  state = {
    email: '',
    modal: false,
    UserNotFoundModal: false,
    errors: '',
  };

  componentWillReceiveProps(nextProps) {
    const { resetPassword } = nextProps;
    resetPassword.reset && !resetPassword.reset.errors
      ? this.setState({ modal: true, errors: resetPassword.reset.errors })
      : this.setState({ ...this.state });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.postDataThunk(
      'post',
      'users/passwordreset',
      requestPasswordRequest,
      this.state,
    );
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, emailError: '' });
  };

  render() {
    const { emailError, modal } = this.state;
    if (modal) {
      return <Modal />;
    }
    return (
      <Card className='card'>
        <Link to='/' style={{ margin: '0 auto' }} />
        <h1 className='card__title'>Authors Haven</h1>
        <br />
        <h2 className='card__heading'>Reset Password</h2>
        <br />
        <div className='card__errors'>{emailError}</div>
        <h3 className='card__label'>Email</h3>
        <form className='card__form' onSubmit={this.handleSubmit}>
          <input
            className='card__input'
            type='email'
            id='email'
            name='email'
            onChange={this.handleChange}
            placeholder='Enter your email'
          />
          {this.props.resetPassword.reset && this.props.resetPassword.reset.errors ? (
            <span className='text-danger'>{this.props.resetPassword.reset.errors}</span>
          ) : ''}
          <br />
          <button className='card__button' type='submit' name='submit'>
            {' '}
            Reset
          </button>
        </form>
      </Card>
    );
  }
}

PasswordReset.propTypes = {
  reset: PropTypes.func,
  history: PropTypes.instanceOf(Object).isRequired,
  requestToReset: PropTypes.func,
};

const mapStateToProps = (state) => ({
  errors: state.resetPassword,
  resetPassword: state.resetPassword,
});

const actionCreator = {
  postDataThunk,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(PasswordReset);
