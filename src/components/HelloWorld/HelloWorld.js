import React from 'react';
import PropTypes from 'prop-types';

/** This is the component description - add custom message. */

const HelloWorld = ({message}) => {
  return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string
}

HelloWorld.defaultProps = {
  message: 'World'
}

export default HelloWorld;
