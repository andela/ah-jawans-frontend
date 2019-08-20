/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
  getAllUserAction, followAction, getFollowingAction, unfollowAction,
} from '../redux/actions/followerAction';
import { getDataThunkPrivate, getDataThunk, postDataThunkPrivate } from '../redux/thunks/index';
import ViewAllUserCard from '../components/viewAllUserCard';
import ProfileView from '../components/profilePopup';
import Layout from '../components/Layout/Layout';

export class AllUserView extends Component {
    state = {
      image: '',
      username: '',
      firstName: '',
      lastName: '',
      dob: '',
      bio: '',
      message: '',
    };

    componentDidMount = async () => {
      await this.props.getDataThunkPrivate('get', '/allusers/', getAllUserAction);
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

    followerEvent = (user) => async () => {
      await this.props.postDataThunkPrivate('post', `profiles/${user.username}/follow`, followAction, null);
      // eslint-disable-next-line no-unused-expressions
      this.props.followMessage
        ? (toast.success(`${this.props.followMessage}!`),
        window.location.reload())
        : toast.error(`you already follow ${user.username}!`);
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

    unfollowEvent = (user) => async () => {
      await this.props.getDataThunkPrivate('delete', `profiles/${user.username}/follow`, unfollowAction);
      this.props.unfollowMessage
        ? (toast.success(`${this.props.unfollowMessage}!`),
        window.location.reload())
        : toast.error(`you already unfollow ${user.username}!`);
    }

    followThem = (username) => {
      const dataUsername = [];
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
                follow={this.followerEvent}
                unfollow={this.unfollowEvent}
                buttonName='follow'
                followThem={this.followThem}
              />
            <div className="contents">
             <ViewAllUserCard
              followData={this.props.following}
              users={this.props.allUsers}
              history={this.props.history}
              handelOnlick={this.handelOnlick}
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

AllUserView.propTypes = {
  getDataThunkPrivate: PropTypes.func,
  allUsers: PropTypes.array,
  history: PropTypes.any,
  getDataThunk: PropTypes.func,
  postDataThunkPrivate: PropTypes.func,
  followMessage: PropTypes.string,
  following: PropTypes.array,
  unfollowMessage: PropTypes.string,
};

export const mapStateToProps = (state) => ({
  allUsers: state.followerData.getAllUsers.data.usersList,
  following: state.followerData.getAllfollowing.data.following,
  followMessage: state.followerData.follow.message,
  unfollowMessage: state.followerData.unfollow.message,
});

const actionCreator = {
  getDataThunkPrivate, getDataThunk, postDataThunkPrivate,
};

export default connect(mapStateToProps, actionCreator)(AllUserView);
