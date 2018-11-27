import React from 'react';
// import PropTypes from 'prop-types';
import PassportInput from '../PassportInput';
import Separator from '../Separator';
// import Well from '../Well';
import './PassportSearch.css';

class PassportSearch extends React.Component {
  render() {
    return (
      <div className="well">

          <PassportInput />
          <Separator />

      </div>
    );
  }
}

PassportSearch.propTypes = {
};

PassportSearch.defaultProps = {
}

export default PassportSearch;
