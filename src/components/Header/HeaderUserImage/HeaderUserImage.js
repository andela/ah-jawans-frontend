import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Img } from '../../common';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import './HeaderUserImage.scss';

class HeaderUserImage extends Component {
  render() {
    const { className } = this.props;
    const image = localStorage.getItem('image');
    let image1;
    if (image !== 'null') {
      if (image) {
        // eslint-disable-next-line no-unused-expressions
        image.split(':')[0] === 'https' ? image1 = image : image1 = `https://res.cloudinary.com/djxhcwowp/image/upload/v${image}`;
      }
    }
    return (
      <div className={className}>
        <Img imgSrc={image1 || profileImagePlaceHolder} width="45px" imgClass="radius-5" />
      </div>
    );
  }
}

HeaderUserImage.propTypes = {
  // image: PropTypes.string,
  className: PropTypes.string,
};

HeaderUserImage.defaultProps = { className: 'HeaderUserImage' };

export default connect()(HeaderUserImage);
