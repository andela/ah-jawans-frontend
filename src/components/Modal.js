import React, { Component } from 'react';
import Card from './Card';

class Modal extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
        <Card className='card'>
          <h1 className='card__title'>Authors Haven</h1>
          <br />
          <h2 className='card__heading'>
            An email has been sent containing instructions for resetting your
            password
          </h2>
          <br />
        </Card>
    );
  }
}

export default Modal;
