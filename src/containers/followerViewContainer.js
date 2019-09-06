import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
  getFollowerAction, getFollowingAction, followAction, unfollowAction,
} from '../redux/actions/followerAction';
import { getDataThunkPrivate, getDataThunk, postDataThunkPrivate } from '../redux/thunks/index';
import FollowerCard from '../components/followerCards';
import ProfileView from '../components/profilePopup';
import Layout from '../components/Layout/Layout';

export class FollowerView extends Component {
    state ={
      image: '',
      username: '',
      firstName: '',
      lastName: '',
      dob: '',
      bio: '',
      message: '',
    };

    componentDidMount = async () => {
      await this.props.getDataThunkPrivate('get', 'profiles/followers', getFollowerAction);
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

    followerEvent = (user) => async () => {
      await this.props.postDataThunkPrivate('post', `profiles/${user.username}/follow`, followAction, null);
      // eslint-disable-next-line no-unused-expressions
      this.props.followMessage
        ? (toast.success(`${this.props.followMessage}!`), window.location.reload())
        : toast.error(`you already follow ${user.username}!`);
    }

    removeModel = async () => {
      const modal = document.getElementById('myModal');
      modal.classList.remove('modalsd');
      modal.classList.add('modal');
    };

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

    unfollowEvent = (user) => async () => {
      await this.props.getDataThunkPrivate('delete', `profiles/${user.username}/follow`, unfollowAction);
      // eslint-disable-next-line no-unused-expressions
      this.props.unfollowMessage ? (toast.success(`${this.props.unfollowMessage}!`), window.location.reload())
        : toast.error(`you already unfollow ${user.username}!`);
    }

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
          <ProfileView
                image={this.state.image }
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                dob={this.state.dob}
                bio={this.state.bio}
                username={this.state.username}
                removeModel={this.removeModel}
                message={this.state.message}
                buttonName='follow'
                follow={this.followerEvent}
                unfollow={this.unfollowEvent}
                followThem={this.followThem}
              />
            <div className="contents">
             <FollowerCard
              follower={this.props.follower}
              viewProfile={this.handelOnlick}
              follow={this.followerEvent}
              unfollow={this.unfollowEvent}
              followThem={this.followThem}
             />
            </div>
          </Layout>
          </>

      );
    }
}

FollowerView.propTypes = {
  getDataThunkPrivate: PropTypes.func,
  postDataThunkPrivate: PropTypes.func,
  followingNumber: PropTypes.string,
  following: PropTypes.array,
  follower: PropTypes.array,
  followMessage: PropTypes.string,
  unfollowMessage: PropTypes.string,
};
export const mapStateToProps = (state) => ({
  follower: state.followerData.getAllfollower.data.followers,
  followMessage: state.followerData.follow.message,
  unfollowMessage: state.followerData.unfollow.message,
  following: state.followerData.getAllfollowing.data.following,
});
const actionCreator = {
  getDataThunkPrivate, getDataThunk, postDataThunkPrivate,
};

export default connect(mapStateToProps, actionCreator)(FollowerView);
