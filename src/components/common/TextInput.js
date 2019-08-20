import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  onChange, value, type, placeholder, name, className,
}) => (
  <input
    type={type}
    className={className}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    name={name}
  />
);

TextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
