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
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
