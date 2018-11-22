import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/** A toggle component
**/

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const {width} = this.props;
    return (
      <Fragment>
        <button style={{width: `${width}px`}} onClick={this.toggle}>{this.state.show ? 'Hide' : 'Show'}</button>
        {this.state.show && <p>You found me!</p>}
      </Fragment>
    )
  }
}

Toggle.propTypes = {
  /** The width of the button */
  width: PropTypes.integer
}

Toggle.defaultProps = {
  width: 250
}

export default Toggle;
