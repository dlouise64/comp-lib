import React from 'react';
import PropTypes from 'prop-types';

/** This is the component description - add custom message. */

const Button = ({message}) => {
  return <div>Hello {message}</div>
}

Button.propTypes = {
  /** Message to display */
  message: PropTypes.string
}

Button.defaultProps = {
  message: 'World'
}

export default Button;
