import React from 'react';
import PropTypes from 'prop-types';

/** Use for actions in forms, dialogs, and more with support for multiple sizes, states, and more. */

const Button = ({message}) => {
  return <button>{message}</button>
}

Button.propTypes = {
  /** Message to display */
  message: PropTypes.string
}

Button.defaultProps = {
  message: 'Submit'
}

export default Button;
