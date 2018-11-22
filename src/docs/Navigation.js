import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({components}) => {
  return (
    <div className="navigation">
      <h2>Components</h2>
      <ul>
      {
        components.map( name => {
          return (
            <li key={name}>
              <a href={`#${name}`}>{name}</a>
            </li>
          )
        })
      }
     </ul>
     <a href="https://github.com/dlouise64/comp-lib">View on Github</a>
    </div>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
