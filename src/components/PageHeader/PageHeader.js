import React from 'react';
import PropTypes from 'prop-types';

import './PageHeader.css';

class PageHeader extends React.Component {
  render() {
    const {message} = this.props;
    return (
      <h1 className="pageHeader">{message}</h1>
    );
  }
}

PageHeader.propTypes = {
  /** the message to display in the title */
  message: PropTypes.string.isRequired
};

PageHeader.defaultProps = {
}

export default PageHeader;
