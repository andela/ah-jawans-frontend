/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { getNotificationsAction } from '../../../redux/actions/user/notifications';
import { Button } from '../../common';
import Modal from './Modal/Modal';
import { getDataThunkPrivate } from '../../../redux/thunks';

class GetNotifications extends Component {
  state = {
    showModal: false,
    notification_number: 0,
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ showModal: false });
  };

  componentDidMount = async () => {
    const id = localStorage.getItem('id');
    await this.props.getDataThunkPrivate('get', `viewNotifications/${id}/unseen`, getNotificationsAction);
  };

  displayNotifications = () => {
    this.setState({ showModal: true });
  };

  render() {
    const { notifications } = this.props;
    const { showModal } = this.state;
    if (notifications) {
      return (
        <span className="header-notification-button inline-block">
          <Button buttonClass="button white" onClick={this.displayNotifications} id="display">
            <FontAwesomeIcon icon={faBell} size="lg" />{' '}
            {notifications.filter((item) => item.status === 'unseen').length === 0 ? (
              ''
            ) : (
                <span className="number">{notifications.filter((item) => item.status === 'unseen').length}</span>
              )}
          </Button>
          <Modal closeModal={this.closeModal} showModal={showModal} />
        </span>
      );
    }
    return (
      <div className="header-notification-button inline-block">
        <Button buttonClass="button white" onClick={this.displayNotifications} id="display">
          <FontAwesomeIcon icon={faBell} size="lg" />{' '}
        </Button>
      </div>
    );
  }
}


GetNotifications.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.string,
  message: PropTypes.string,
  getDataThunkPrivate: PropTypes.func,
  notifications: PropTypes.array,
};
export const mapStateToProps = (state) => ({
  notifications: state.notification.Notifications,
});

const actionCreator = {
  getDataThunkPrivate,
};

export default connect(
  mapStateToProps, actionCreator,
)(GetNotifications);
