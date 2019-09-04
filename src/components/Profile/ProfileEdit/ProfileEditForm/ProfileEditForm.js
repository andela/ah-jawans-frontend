import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button, Form, Input, Alert, TextArea,
} from '../../../common';
import './ProfileEditForm.scss';
import patchUserAction from '../../../../redux/actions/user/editProfile';
import { validateUser } from '../../../../helpers/validation';
import { postDataThunkPrivate } from '../../../../redux/thunks';

export class ProfileEditForm extends Component {
  state = {
    modalStyle: 'none',
    form: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      bio: '',
    },
    editedForm: {},
    errors: {},
    message: '',
    data: {},
  };

  componentWillReceiveProps(props) {
    this.setState({
      form: {
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        username: props.user.username,
        email: props.user.email,
        bio: props.user.bio,
      },
    });
    const { errors } = this.state;
    this.setState({ message: props.message, errors: { ...errors } });
  }

  handleChange = (e) => {
    const { form, editedForm, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      editedForm: { ...editedForm, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: '' },
      message: '',
    });
    return e;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, editedForm } = this.state;
    const { confirmPassword, ...formData } = editedForm;

    Object.keys(editedForm).forEach((key) => editedForm[key] || delete editedForm[key]);

    const formErrors = validateUser(editedForm, 'updateUser');

    this.setState({ errors: { ...errors, ...formErrors } });


    if (!formErrors.firstName
      && !formErrors.lastName
      && !formErrors.username && !formErrors.email && !formErrors.bio) {
      await this.props.postDataThunkPrivate('patch', 'users', patchUserAction, formData);
      if (formData.username) {
        localStorage.setItem('username', formData.username);
      }
      window.location.reload();
    }
  };

  render() {
    const { loading } = this.props;
    const {
      form, errors, message,
    } = this.state;
    return (
      <div className="ProfileEditForm">
        <div className="small-screen-4">
          {(message || errors.token || errors.authentication || errors.message) && (
            <Alert
              alertType={(message && 'success') || 'danger'}
              message={message || errors.token || errors.authentication || errors.message}
            />
          )}
        </div>
        <Form formClass="Form large-padding radius-4 small-screen-3" onSubmit={this.handleSubmit}>
          <div className="large-screen-2 medium-screen-2 small-screen-4">
            <Input
              name="firstName"
              type="text"
              inputClass="medium-text radius-5"
              placeholder="First name"
              onChange={this.handleChange}
              value={form.firstName}
              error={errors.firstName}
              errorWidth={180}
            />
          </div>
          <div className="large-screen-2 medium-screen-2 small-screen-4">
            <Input
              name="lastName"
              type="text"
              inputClass="medium-text radius-5"
              placeholder="Last name"
              onChange={this.handleChange}
              value={form.lastName}
              error={errors.lastName}
              errorWidth={180}
            />
          </div>
          <div className="small-screen-4">
            <Input
              name="username"
              type="text"
              inputClass="medium-text radius-5"
              placeholder='Username'
              onChange={this.handleChange}
              value={form.username}
              error={errors.username}
              errorWidth={180}
            />
          </div>
          <div className="small-screen-4">
            <Input
              name="email"
              type="email"
              inputClass="medium-text radius-5"
              placeholder="Email"
              onChange={this.handleChange}
              value={form.email}
              error={errors.email}
              errorWidth={180}
            />
          </div>
          <div className="small-screen-4">
            <TextArea
              name="bio"
              textAreaClass="radius-5 medium-text textarea"
              placeholder="Bio"
              rows={6}
              onChange={this.handleChange}
              value={form.bio}
              defaultValue={form.bio}
              error={errors.bio}
              errorWidth={250}
            />
          </div>
          <div className="small-screen-4">
            <Button type="submit" class="button1" loading={loading} >
              SAVE
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

ProfileEditForm.propTypes = {
  loading: PropTypes.bool,
  profile: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string,
  message: PropTypes.string,
  errors: PropTypes.object,
  editProfile: PropTypes.func,
  user: PropTypes.object,
  postDataThunkPrivate: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = ({
  userCredentials: {
    editProfile: { loading, message, errors },
  },
}) => ({
  loading, message, errors,
});


const actionCreator = {
  postDataThunkPrivate,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(ProfileEditForm);
