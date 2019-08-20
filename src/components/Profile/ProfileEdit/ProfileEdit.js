/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../common';
import './ProfileEdit.scss';
import { htmlHelper } from '../../../helpers';
import ProfileEditForm from './ProfileEditForm';

export class ProfileEdit extends Component {
  state = { modalStyle: 'none' };

  // eslint-disable-next-line react/prop-types
  componentWillReceiveProps({ user }) {
    this.setState({ user });
  }

  hideModal = () => this.setState({ modalStyle: 'none' });

  showModal = () => this.setState({ modalStyle: 'block' });

  render() {
    const { modalStyle, user } = this.state;
    return (
      <div className="ProfileEdit">
        <Button type="button" onClick={this.showModal}>
          Edit Profile <FontAwesomeIcon icon={faEdit} />
        </Button>
        <div className={`modal ${modalStyle}`}>
          <div className="modal-content">
            <div className="modal-header left-align">
              <Button
                buttonClass="button medium-padding yellow radius-5 text-black"
                type="button"
                onClick={this.hideModal}
              >
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </Button>
            </div>
            <div className="modal-body">
              <ProfileEditForm user={user} />
            </div>
          </div>
          {htmlHelper.tagGenerator('br', null, 10)}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({ user: state.user.profile });

export default connect(mapStateToProps, {})(ProfileEdit);
