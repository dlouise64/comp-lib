module.exports = [{"name":"Label","description":"Label with required field display, htmlFor, and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterix after label if true"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport './Label.css';\n\n/** Label with required field display, htmlFor, and block styling */\nfunction Label({htmlFor, label, required}) {\n  return (\n    <label style={{display: 'block'}} htmlFor={htmlFor}>\n      {label} { required && <span style={{color: 'red'}}> *</span> }\n    </label>\n  )\n}\n\nLabel.propTypes = {\n  /** HTML ID for associated input */\n  htmlFor: PropTypes.string.isRequired,\n\n  /** Label text */\n  label: PropTypes.string.isRequired,\n\n  /** Display asterix after label if true */\n  required: PropTypes.bool\n};\n\nLabel.defaultProps = {\n}\n\nexport default Label;\n","examples":[{"name":"ExampleLabel","description":"Label","code":"import React from 'react';\nimport Label from 'sil-react/Label';\n\n/** Label */\nexport default function ExampleLabel() {\n  return <Label\n    label=\"Label for label\"\n    htmlFor=\"my_label\"\n  />;\n}\n"},{"name":"ExampleLabelRequired","description":"Label Required","code":"import React from 'react';\nimport Label from 'sil-react/Label';\n\n/** Label Required */\nexport default function ExampleLabelRequired() {\n  return <Label\n    label=\"Label for label\"\n    htmlFor=\"my_label\"\n    required\n  />;\n}\n"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport './ProgressBar.css';\n\nclass ProgressBar extends React.Component {\n\n  getColor = percent => {\n    if(this.props.percent === 100) return 'green';\n    return this.props.percent > 50 ? 'lightgreen' : 'red';\n  }\n\n  getWidthAsPercentOfTotalWidth = () => {\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\n  }\n  render() {\n    const {percent, width, height} = this.props;\n    return (\n      <div style={{border: 'solid 1px lightgray', width: width}} className=\"progressBar\">\n        <div style={{\n          width: this.getWidthAsPercentOfTotalWidth(),\n          height,\n          backgroundColor: this.getColor(percent)\n        }}>\n        </div>\n      </div>\n    );\n  }\n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number.isRequired,\n\n  /** Bar width */\n  width: PropTypes.number.isRequired,\n\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  height: 5\n}\n\nexport default ProgressBar;\n","examples":[{"name":"Example100Percent","description":"Example100Percent","code":"import React from 'react';\nimport ProgressBar from 'sil-react/ProgressBar';\n\n/** Example100Percent*/\nexport default function Example100Percent() {\n  return <ProgressBar percent={100} width={150} />;\n}\n"},{"name":"Example10Percent","description":"Example10Percent","code":"import React from 'react';\nimport ProgressBar from 'sil-react/ProgressBar';\n\n/** Example10Percent*/\nexport default function Example10Percent() {\n  return <ProgressBar percent={10} width={150} />;\n}\n"},{"name":"Example70Percent","description":"Example70Percent","code":"import React from 'react';\nimport ProgressBar from 'sil-react/ProgressBar';\n\n/** Example70Percent*/\nexport default function Example70Percent() {\n  return <ProgressBar percent={70} width={150} />;\n}\n"}]}]