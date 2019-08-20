/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  value, type, placeholder, name, onChange, className,
}) => (
    <input
      type={type}
      className={className}
      name ={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
