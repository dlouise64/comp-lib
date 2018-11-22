import React from 'react';
import PropTypes from 'prop-types';

/** Use for actions in forms, dialogs, and more with support for multiple sizes, states, and more. */

const Button = ({message, theme, size}) => {
  return <button className={`btn ${theme && theme} ${size && size}`}>{message}</button>
}

Button.propTypes = {
  /** Message to display on the button */
  message: PropTypes.string,
  /** Themes available: info */
  theme: PropTypes.string,
  /** Sizes available: small, medium, large */
  size: PropTypes.string
}

Button.defaultProps = {
  message: 'Submit',
  theme: 'default',
  size: 'small'
}

export default Button;
