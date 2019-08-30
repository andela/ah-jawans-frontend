import React, { Component } from 'react';
import { Card } from 'reactstrap';
import PropTypes from 'prop-types';

class CenteredCard extends Component {
  render() {
    const { children } = this.props;
    return (
        <div className='row h-100'>
        <div className='col-sm-12 my-auto'>
          <Card body className='col-sm-5 col-md-6 col-lg-4 w3-card shadow-lg'>
            {children}
          </Card>
        </div>
      </div>
    );
  }
}

CenteredCard.propTypes = {
  children: PropTypes.instanceOf(Array),
};

CenteredCard.defaultProps = {
  children: [],
};

export default CenteredCard;
