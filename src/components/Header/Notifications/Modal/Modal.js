import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ReadNotificationsAction } from '../../../../redux/actions/user/notifications';
import { postDataThunkPrivate } from '../../../../redux/thunks';


class Modal extends Component {
  updateStatus = async (val) => {
    const id = localStorage.getItem('id');
    await this.props.postDataThunkPrivate('patch', `viewNotifications/${id}/seen/${val.id}`, ReadNotificationsAction);
  };

  render() {
    const { notifications, showModal, closeModal } = this.props;
    return (
      <div id="modal" className={showModal ? '' : 'hide'}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="text-black center-align">
            <h2>Notification</h2>
          </div>
          <br />

          {notifications === 0 ? (
            <div>
              <h3 className="center-align">No new notifications</h3>
              <div className="divider" />
            </div>
          ) : (
              <div>
                <div>
                  {notifications.map((val, key) => (
                    <div key={key} className={val.status === 'unseen' ? 'row light-red' : 'row'}>
                      <div key={key} className="wrap-notification">
                        <div className="notification-tick">
                          {val.status === 'unseen' ? (
                            <FontAwesomeIcon
                              icon={faCheck}
                              size="2x"
                              className="text-light-grie small-padding left"
                            />
                          ) : (
                              <FontAwesomeIcon
                                icon={faCheckDouble}
                                size="2x"
                                className="left small-padding text-light-grey"
                              />
                          )}
                        </div>
                        <div className="left medium-text notification-message ">
                          <div className="small-v-padding">
                            {val.message.length > 120
                              ? `${val.message.substring(0, 120)}...`
                              : `${val.message}`}
                          </div>
                          <a className="text-info medium-v-padding" href={val.url} onClick={() => this.updateStatus(val)}>
                            Click here to read
                          </a>
                          <br />
                        </div>

                        <div className="right small-text text-light-grie notification-time hide-on-medium hide-on-small">
                          {new Date(val.createdAt).toDateString()}
                        </div>
                      </div>
                      <div className="divider" />

                      <div className="divider light-grey" />
                    </div>
                  ))}
                </div>
              </div>
          )}
          <div />
        </div>
        <br />
      </div>
    );
  }
}

Modal.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.string,
  message: PropTypes.string,
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  notifications: PropTypes.array,
  postDataThunkPrivate: PropTypes.func,
};

export const mapStateToProps = (state) => ({
  notifications: state.notification.Notifications,
});

const actionCreator = {
  postDataThunkPrivate,
};

export default connect(
  mapStateToProps, actionCreator,
)(Modal);
