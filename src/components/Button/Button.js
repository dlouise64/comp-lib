import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends React.Component {
  render() {
    const {message} = this.props;
    return (
      <input className="btn info" type="submit" value={message} />
    );
  }
}

Button.propTypes = {
  /** message to display on button */
  message: PropTypes.string.isRequired
};

Button.defaultProps = {
  /** Default message */
  message: "Submit"
}

export default Button;
