import React, { Fragment } from 'react';

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
      <div>
        <button style={{width: `${width}px`}} onClick={this.toggle}>{this.state.show ? 'Hide' : 'Show'}</button>
        {this.state.show && <p>You found me!</p>}
      </div>
    )
  }
}

export default Toggle;
