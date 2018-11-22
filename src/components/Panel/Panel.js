import React from 'react';
import PropTypes from 'prop-types';

/** Panels  */

const Panel = ({title, list, theme}) => {
  return <div className="panel">
    <header className={theme && theme}>
      <h2>{title}</h2>
    </header>
    <div>
      {list && <ul>
        {list.map(item=>{
          return <li key={item}>{item}</li>
        })}
      </ul>}
      {!list && <p>No data to display</p>}
    </div>
  </div>
}

Panel.propTypes = {
  /** A title for the panel */
  title: PropTypes.string.isRequired,
  /** Array of information */
  list: PropTypes.array,
  /** Available themes: success, warning */
  theme: PropTypes.string
}

Panel.defaultProps = {
  title: 'Panel Title'
}

export default Panel;
