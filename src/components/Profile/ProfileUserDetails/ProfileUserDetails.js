/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { getDataThunk, getDataThunkPrivate } from '../../../redux/thunks';
import { getFollowerActionNumber, getFollowingActionNumber } from '../../../redux/actions/followerAction';

export class ProfileUserDetails extends Component {
  state = { modalStyle: 'none' };

  hideModal = () => this.setState({ modalStyle: 'none' });

  showModal = () => this.setState({ modalStyle: 'block' });

  componentDidMount = async () => {
    const userName = localStorage.getItem('username');
    await this.props.getDataThunkPrivate('get', 'profiles/following', getFollowingActionNumber);
    await this.props.getDataThunkPrivate('get', 'profiles/followers', getFollowerActionNumber);
    await this.props.getDataThunk('get', `user/${userName}`, getUserAction);
  }

  render() {
    const { modalStyle } = this.state;
    if (this.props.userProfile) {
      const {
        userProfile: {
          firstName, lastName, username, email, bio, image,
        },
      } = this.props;
      let image1;
      if (image) {
        // eslint-disable-next-line no-unused-expressions
        image.split(':')[0] === 'https' ? image1 = image : image1 = `https://res.cloudinary.com/djxhcwowp/image/upload/v${image}`;
      }
      return (
        <div className="ProfileUserDetails container">
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
              <div className={`modals ${modalStyle}`}>
                <div className="modal-content">
                  <div className="modal-header left-align">
                    <Button
                      buttonClass="button medium-padding yellow radius-5 text-black"
                      onClick={this.hideModal}
                      buttonId='hidemodels'
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
                {firstName && firstName} {lastName && lastName}
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
                <Link to={'/follower'}>
                  <span className="followers" onClick={this.handOnClickFollower }>
                    <span className="number">{this.props.follower}</span> Followers
                  </span>
                </Link>
                <Link to={'/following'}>
                  <span className="following">
                    <span className="number">{this.props.following}</span> Following
                  </span>
                </Link>
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
  getDataThunkPrivate: PropTypes.func,
  follower: PropTypes.number,
  following: PropTypes.number,
};

export const mapStateToProps = (state) => ({
  userProfile: state.getUser,
  follower: state.followerData.followerNumber,
  following: state.followerData.followingNumber,
});

const actionCreator = {
  getDataThunk, getDataThunkPrivate,
};

export default connect(mapStateToProps, actionCreator)(ProfileUserDetails);
