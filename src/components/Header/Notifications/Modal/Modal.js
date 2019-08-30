import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
rt './Modal.scss';
// import getNotificationsAction from '../../../redux/actions/user/notifications';

ass Modal extends Component {
   updateStatus = (val) => {
     const { updateUnseenNotification, getNotification } = this.props;
     updateUnseenNotification(val);
      f (val.status !== 'seen') {
        etTimeout(() => {
          etNotification();
  //     }, 100);
        
          
        
        eNotification = (val) => {
  //   const { deleteNotification } = this.props;
        eteNotification(val);
          
            out(() => {
            tification();
          0);
        
            
              ) => {
                lAsSeen } = this.props;
                  
                    
                      
                        
                          howModal, closeModal } = this.props;
                            console.log(this.props, 'props from modal');
                        
      <div id="modal" className={showModal ? '' : 'hide'}>
                          ntent">
                          " onClick={closeModal}>
                          
                        
                        text-black center-align">
            <h2>Notification</h2>
                      
                        
                          
          {notifications === 0 ? (
            <div>
                        e="center-align">No new notifications</h3>
                      Name="divider" />
            </div>
                      
                        
                      
                    n>Mark all notification as seen:</span>
                    n>
                    <button
                    className="border b-light medium-margin radius-2"
                    onClick={this.markAsSeen}
                  >
                    <FontAwesomeIcon icon={faCheckDouble} size="2x" className="text-success" />
                  </button>
                  </span>
              </div>
              <div>
      {/* {notifications((val, key) => (
                    <div key={key} className={val.status === 'unseen' ? 'row light-red' : 'row'}>
                      <div role="button" onClick={() => this.updateStatus(val)}>
                        <div key={key} className="wrap-notification">
                          <div className="notification-tick">
                            {val.status === 'unseen' ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                size="1x"
                                className="text-light-grie small-padding left"
                              />
                            ) : (
                                <FontAwesomeIcon
                                  icon={faCheckDouble}
                                  size="1x"
                                  className="left small-padding text-light-grey"
                                />
                            )}
                            <FontAwesomeIcon
                              icon={faTrash}
                              size="1x"
                                  id={`deleteNotification${key}`}
                                  className="left small-padding text-danger cursor-pointer"
                                  onClick={() => this.deleteNotification(val)}
                                />
                          </div>
                                <div className="left medium-text notification-message ">
                                <div className="small-v-padding">
                                  {val.message.length > 120
                                  ? `${val.message.substring(0, 120)}...`
                                  : `${val.message}`}
                            </div>
                            <a className="text-info medium-v-padding" href={val.url}>
                              Click here to read
                          </a>
                            <br />
                          </div>

                          <div className="right small-text text-light-grie notification-time hide-on-medium hide-on-small">
                            {new Date(val.createdAt).toDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="divider" />

                      <div className="divider light-grey" />
                    </div>
                  ))} */}
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
  markAllAsSeen: PropTypes.func,
  notifications: PropTypes.func,
  deleteNotification: PropTypes.func,
};

export const mapStateToProps = (state) => {
  console.log(state, 'from modal');
  return {
    notifications: state.notifications,
  };
};

export default connect(
  mapStateToProps,
)(Modal);
