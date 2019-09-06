import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faUserCircle,
  faSignOutAlt,
  faCog,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import './HeaderUserMenu.scss';

class HeaderUserMenu extends Component {
  logout = async () => {
    window.localStorage.clear();
    window.location.replace('/');
  };

  render() {
    const selector = document.querySelector('.HeaderUserImage');
    let username; let isAuth;
    if (localStorage.getItem('username') !== null) {
      username = localStorage.getItem('username');
      isAuth = true;
    } else {
      username = '';
      isAuth = false;
    }
    return (
      <div
        className="HeaderUserMenu"
        style={{ left: (selector && selector.offsetLeft - 140) || 0 }}
      >

        <div className="username" style={{ color: '#ffffff' }}>
          {
            username || 'Welcome'}
        </div >
        <ul>
          {!isAuth && (
            <li>
              <Link to="/signup">
                <label htmlFor="signup">
                  <FontAwesomeIcon icon={faUserCircle} size="lg" />
                </label>
                <p id="signup" className="menu-links"> Sign up</p>
              </Link>
            </li>
          )
          }

          {!isAuth && (
            <li>
              <Link to="/login">
                <label htmlFor="login">
                  <FontAwesomeIcon icon={faSignInAlt} size="lg" />
                </label>
                <p id="login" className="menu-links">Sign in</p>
              </Link>
            </li>
          )
          }

          {(
            <li>
              <Link to="/users">
                <label htmlFor="users">
                  <FontAwesomeIcon icon={faUsers} size="lg" />
                </label>
                <p id="users" className="menu-links">Users</p>
              </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link to="/profile">
                <label htmlFor="profile">
                  <FontAwesomeIcon icon={faUserCircle} size="lg" />
                </label>
                <p id="profile" className="menu-links">Profile</p>
              </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link to="/passwordReset">
                <label htmlFor="passwordReset">
                  <FontAwesomeIcon icon={faCog} />
                </label>
                <p id="passwordReset" className="menu-links">Change password</p>
              </Link>
            </li>
          )}
          {isAuth && (
            <li>
              <Link to="/follower" className="menu-links">
                <label htmlFor="follower">
                  <FontAwesomeIcon icon={faUserCircle} size="lg" />
                </label>
                <p id="follower" className="menu-links">Followers</p>
              </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link className="logout menu-links" to="/" onClick={this.logout}>
                <label htmlFor="follower">
                  <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                </label>
                <p id="follower" className="menu-links">Log out</p>
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

HeaderUserMenu.propTypes = {
  isAuth: PropTypes.bool,
  className: PropTypes.string,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  logoutUserAction: PropTypes.any,
};

HeaderUserMenu.defaultProps = { className: 'HeaderUserMenu', isAuth: false };

const mapStateToProps = ({
  userCredentials: {
    isAuth,
    userCredentials: { token, username, id },
  },
}) => ({
  isAuth,
  token,
  username,
  id,
});

export default connect(mapStateToProps)(HeaderUserMenu);
