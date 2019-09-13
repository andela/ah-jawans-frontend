import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tagText }) => (
    <div className='display-tags'>
        <text>{tagText}</text>
    </div>
);

Tags.propTypes = {
  tagText: PropTypes.string,
};

export default Tags;
