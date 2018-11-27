import React from 'react';
import PropTypes from 'prop-types';

import './Label.css';

/** Label with required field display, htmlFor, and block styling */
function Label({htmlFor, label, required}) {
  return (
    <label style={{display: 'block'}} htmlFor={htmlFor}>
      {label} { required && <span style={{color: 'red'}}> *</span> }
    </label>
  )
}

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterix after label if true */
  required: PropTypes.bool
};

Label.defaultProps = {
}

export default Label;
