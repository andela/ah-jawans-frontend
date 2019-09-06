/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { getFollowingAction, unfollowAction } from '../redux/actions/followerAction';
import { getDataThunkPrivate, getDataThunk, postDataThunkPrivate } from '../redux/thunks/index';
import FollowingCard from '../components/followingCard';
import ProfileView from '../components/profilePopup';
import Layout from '../components/Layout/Layout';

export class FollowingView extends Component {
  state = {
    image: '',
    username: '',
    firstName: '',
    lastName: '',
    dob: '',
    bio: '',
    message: '',
    unfollowMessage: '',
  };

    componentDidMount = async () => {
      await this.props.getDataThunkPrivate('get', 'profiles/following', getFollowingAction);
    }

    handelOnlick = (use) => () => {
      this.setState({
        image: use.image,
        username: use.username,
        firstName: use.firstName,
        lastName: use.lastName,
        dob: use.dob,
        bio: use.bio,
      });
      const modal = document.getElementById('myModal');
      modal.classList.remove('modal');
      modal.classList.add('modalsd');
    };

    removeModel = async () => {
      const modal = document.getElementById('myModal');
      modal.classList.remove('modalsd');
      modal.classList.add('modal');
    };

    unfollowEvent = (user) => async () => {
      await this.props.getDataThunkPrivate('delete', `profiles/${user.username}/follow`, unfollowAction);
      // eslint-disable-next-line no-unused-expressions
      this.props.unfollowMessage ? (toast.success(`${this.props.unfollowMessage}!`), window.location.reload())
        : toast.error(`you already unfollow ${user.username}!`);
    }

    onKeyUpHandle = () => {
      const { value } = document.getElementById('search-btn');
      const username = document.getElementsByClassName('usernamevalue');
      const userCard = document.getElementsByClassName('cards');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= username.length; i++) {
        if (username[i]) {
          if (username[i].textContent.indexOf(value) > -1) {
            userCard[i].style.display = '';
          } else {
            userCard[i].style.display = 'none';
          }
        }
      }
    }

    followerEvent = (user) => () => user;


    followThem = (username) => {
      const dataUsername = [];
      // eslint-disable-next-line no-unused-expressions
      this.props.following
      && this.props.following.map((user) => dataUsername.push(user.followedUser.username));
      return dataUsername.includes(username);
    };

    render() {
      return (
          <>
            <Layout>
            <div className="search input in-p">
              <input id="search-btn" className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.onKeyUpHandle}/>
            </div>
            <div className="contents">
              <ProfileView
                  image={this.state.image }
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  dob={this.state.dob}
                  bio={this.state.bio}
                  username={this.state.username}
                  removeModel={this.removeModel}
                  follow={this.followerEvent}
                  unfollow={this.unfollowEvent}
                  followThem={this.followThem}
                  buttonName='unfollow'
                />
             <FollowingCard
                following={this.props.following}
                unfollow={this.unfollowEvent}
                viewProfile={this.handelOnlick}
                follow={this.followerEvent}
                followThem={this.followThem}
             />
            </div>
            </Layout>
          </>

      );
    }
}

FollowingView.propTypes = {
  getDataThunkPrivate: PropTypes.func,
  followingNumber: PropTypes.string,
  following: PropTypes.array,
  follower: PropTypes.array,
  followMessage: PropTypes.string,
  unfollowMessage: PropTypes.string,
  postDataThunkPrivate: PropTypes.func,
};
export const mapStateToProps = (state) => ({
  following: state.followerData.getAllfollowing.data.following,
  followMessage: state.followerData.follow.message,
  unfollowMessage: state.followerData.unfollow.message,
});

const actionCreator = {
  getDataThunkPrivate, getDataThunk, postDataThunkPrivate,
};

export default connect(mapStateToProps, actionCreator)(FollowingView);
