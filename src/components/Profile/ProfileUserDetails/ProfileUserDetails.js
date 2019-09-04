/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import isEmpty from 'lodash/isEmpty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faEdit, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Img, Button } from '../../common';
import './ProfileUserDetails.scss';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import ProfileEditPicture from '../ProfileEdit/ProfileEditPicture';
import ProfileEdit from '../ProfileEdit';
import { htmlHelper } from '../../../helpers';
import getUserAction from '../../../redux/actions/user/getUser';
import { getDataThunk, postDataThunkPrivate } from '../../../redux/thunks';
import OptInOrOut from '../Notifications/Opt/optInOut';
import {
  optInAppAction, optOutAppAction, optInEmailAction, optOutEmailAction,
} from '../../../redux/actions/notificationAction';


export class ProfileUserDetails extends Component {
  state = {
    modalStyle: 'none',
    isEmailOpted: true,
    isAppOpted: true,
    userProfile: {},
    opts: {},
  };

  hideModal = () => this.setState({ modalStyle: 'none' });

  showModal = () => this.setState({ modalStyle: 'block' });

  componentDidMount = async () => {
    const userName = localStorage.getItem('username');
    await this.props.getDataThunk('get', `user/${userName}`, getUserAction);
  }

  componentWillReceiveProps= async (nextProps) => {
    const { userProfile } = nextProps;
    if (userProfile) {
      userProfile.Opts.forEach((opt) => {
        this.setState((prevState) => ({
          ...prevState,
          opts: {
            ...prevState.opts,
            [opt.type]: true,
          },
        }));
      });
    }
    this.setState((prevState) => ({
      ...prevState,
      userProfile: userProfile || prevState.userProfile,
    }));
  }

  handleAppChange = async () => {
    this.handleOptsChange('inapp');
    await this.props.postDataThunkPrivate('post', '/optinapp', optInAppAction, null);
    toast.success('You are now opted-in to in-app notifications');
  }

  handledAppChange = async () => {
    this.handleOptsChange('inapp');
    await this.props.postDataThunkPrivate('delete', '/optinapp', optOutAppAction, null);
    toast.success('You have opted-out of in-app notifications');
  }

  handleEmailChange = async () => {
    this.handleOptsChange('email');
    await this.props.postDataThunkPrivate('post', '/optinemail', optInEmailAction, null);
    toast.success('You are now opted-in to email notifications');
  }

  handledEmailChange = async () => {
    this.handleOptsChange('email');
    await this.props.postDataThunkPrivate('delete', '/optinemail', optOutEmailAction, null);
    toast.success('You have opted-out of email notifications');
  }

  handleOptsChange = (type) => this.setState((prevState) => ({
    ...prevState,
    opts: {
      ...prevState.opts,
      [type]: !prevState.opts[type],
    },
  }))

  render() {
    const { modalStyle, userProfile, opts } = this.state;
    if (userProfile && Object.keys(userProfile).length) {
      const {
        firstName, lastName, username, email, bio, image,
      } = userProfile;
      let image1;
      if (image) {
        // eslint-disable-next-line no-unused-expressions
        image.split(':')[0] === 'https' ? image1 = image : image1 = `https://res.cloudinary.com/djxhcwowp/image/upload/v${image}`;
      }
      return (
        <div className="ProfileUserDetails container">
          <ToastContainer position={toast.POSITION.TOP_RIGHT} />
          <div className="small-screen-4 xxlarge-v-margin border b-light-grey radius-2 shadow-1">
            <div className="profile-picture center-align medium-padding small-screen-4 medium-screen-4 large-screen-1">
              <Img
                imgSrc={image1 || profileImagePlaceHolder}
                imgClass="center radius-6"
                maxWidth="200px"
                minWidth="150px"
              />
              <Button onClick={this.showModal}>
                <FontAwesomeIcon icon={faEdit} style={{ color: '#000000' }} />
              </Button>
              <OptInOrOut
                opts={opts}
                handleAppChange={this.handleAppChange}
                handledAppChange={this.handledAppChange}
                handleEmailChange={this.handleEmailChange}
                handledEmailChange={this.handledEmailChange}
                />
              <div className={`modals ${modalStyle}`}>
                <div className="modal-content">
                  <div className="modal-header left-align">
                    <Button
                      buttonClass="button medium-padding yellow radius-5 text-black"
                      onClick={this.hideModal}
                    >
                      <FontAwesomeIcon icon={faTimes} size="1x" />
                    </Button>
                  </div>
                  <div className="modal-body">
                    <ProfileEditPicture />
                  </div>
                </div>
                {htmlHelper.tagGenerator('br', null, 10)}
              </div>
            </div>
            <div className="center-align small-screen-4 medium-screen-4 large-screen-2">
              <div className="small-padding large-text capitalize names">
                {firstName} {lastName}
              </div>
              <div className="small-padding username">
                {username && '@'}
                {username}
              </div>
              <div className="small-padding email">
                {email && <FontAwesomeIcon icon={faEnvelope} />} {email}
              </div>
              <div className="small-padding bio">{bio}</div>
              <div className="divider" />
              <div>
                <span className="followers">
                  <span className="number">{0}</span> Followers
                </span>
                <span className="following">
                  <span className="number">{0}</span> Following
                </span>
              </div>
              <div className="divider" />

              <span className="inline-block medium-v-padding">
                <ProfileEdit />
              </span>{' '}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="ProfileUserDetails container">Wait for the data to upload</div>
    );
  }
}

ProfileUserDetails.propTypes = {
  userCredentials: PropTypes.object,
  userProfile: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  editUserProfile: PropTypes.func,
  fetchUser: PropTypes.func,
  getDataThunk: PropTypes.func,
  history: PropTypes.object,
  postDataThunkPrivate: PropTypes.func,
  optInOutAppReducer: PropTypes.object,
  optInOutEmailReducer: PropTypes.object,

};

export const mapStateToProps = (state) => ({
  userProfile: state.getUser,
});

const actionCreator = {
  getDataThunk, postDataThunkPrivate,
};

export default connect(mapStateToProps, actionCreator)(ProfileUserDetails);
