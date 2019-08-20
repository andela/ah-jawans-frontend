import React, { Component } from 'react';
import Card from './Card';

class UserNotFoundModal extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
        <Card className='card'>
          <h1 className='card__title'>Authors Haven</h1>
          <br />
          <h2 className='card__heading'>
            User with the email address, not found
          </h2>
          <br />
        </Card>
    );
  }
}

export default UserNotFoundModal;
