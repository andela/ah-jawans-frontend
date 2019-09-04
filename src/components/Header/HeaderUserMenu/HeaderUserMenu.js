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
} from '@fortawesome/free-solid-svg-icons';
import './HeaderUserMenu.scss';

class HeaderUserMenu extends Component {
  logout = () => {
    window.localStorage.clear();
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

                <FontAwesomeIcon icon={faUserCircle} /> Sign up
              </Link>

            </li>
          )
          }

          {!isAuth && (
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} /> Sign in
              </Link>

            </li>
          )
          }

          {isAuth && (
            <li>
              <Link to="/profile">
                <FontAwesomeIcon icon={faUserCircle} /> Profile

     </Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link to="/passwordReset">
                <FontAwesomeIcon icon={faCog} /> Change password</Link>
            </li>
          )}

          {isAuth && (
            <li>
              <Link className="logout" to="/" onClick={this.logout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Log out
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
