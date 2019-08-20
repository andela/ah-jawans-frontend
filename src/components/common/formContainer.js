import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} autoComplete="off">{children}</form>
);

FormContainer.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.array,
};
export default FormContainer;
