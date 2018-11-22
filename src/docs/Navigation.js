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
    </div>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
