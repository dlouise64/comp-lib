import React from 'react';
import PropTypes from 'prop-types';

import './Panel.css';

class Panel extends React.Component {
  render() {
    const {title, theme, size} = this.props;
    function getSize(size) {
      
    }
    return (
      <div className={`panel ${theme}`} style={{maxWidth: size === 'small' ? '230px' : '50%'}}>
        <header>{title}</header>
        <div>Some content here</div>
      </div>
    );
  }
}

Panel.propTypes = {
  /** the title */
  title: PropTypes.string.isRequired,
  /** The colour of the title background */
  theme: PropTypes.string,
  /** Affects width - small, medium, large */
  size: PropTypes.string
};

Panel.defaultProps = {
  theme: 'success'
}

export default Panel;
