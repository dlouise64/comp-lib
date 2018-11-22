import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }


  // use static class proper so we can omit use of bind in constructor
  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  render() {
    const {showCode} = this.state;
    const {code, description, name} = this.props.example;

    // must use CommonJS require to dynamically require
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;

    return (
      <div>
        {description && <h4>{description}</h4>}

        <div className="codeexample">
          <ExampleComponent />
        </div>

        <p>
          <a href="#" onClick={this.toggleCode}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </p>

        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example;