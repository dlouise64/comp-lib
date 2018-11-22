import React from 'react';

const HelloWorld = ({message}) => {
  return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
  message: PropTypes.string
}
export default HelloWorld;
