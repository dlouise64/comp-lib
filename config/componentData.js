module.exports = [{"name":"Button","description":"Use for actions in forms, dialogs, and more with support for multiple sizes, states, and more.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display on the button","defaultValue":{"value":"'Submit'","computed":false}},"theme":{"type":{"name":"string"},"required":false,"description":"Themes available: info","defaultValue":{"value":"'default'","computed":false}},"size":{"type":{"name":"string"},"required":false,"description":"Sizes available: small, medium, large","defaultValue":{"value":"'small'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Use for actions in forms, dialogs, and more with support for multiple sizes, states, and more. */\n\nconst Button = ({message, theme, size}) => {\n  return <button className={`btn ${theme && theme} ${size && size}`}>{message}</button>\n}\n\nButton.propTypes = {\n  /** Message to display on the button */\n  message: PropTypes.string,\n  /** Themes available: info */\n  theme: PropTypes.string,\n  /** Sizes available: small, medium, large */\n  size: PropTypes.string\n}\n\nButton.defaultProps = {\n  message: 'Submit',\n  theme: 'default',\n  size: 'small'\n}\n\nexport default Button;\n","examples":[{"name":"ExampleButton","description":"Includes several predefined button styles,\neach serving its own semantic purpose,\nwith a few extras thrown in for more control.","code":"import React, { Fragment } from 'react';\nimport Button from 'sil-react/Button';\n\n/** Includes several predefined button styles,\n  * each serving its own semantic purpose,\n  * with a few extras thrown in for more control.\n**/\n\nexport default function ExampleButton() {\n  return <Fragment>\n    <p>\n      <Button message=\"This is a button\" />\n    </p>\n    <p>\n      <Button\n        message=\"This is a button\"\n        theme=\"info\"\n      />\n    </p>\n    <h3>Sizes</h3>\n    <p>\n      <Button\n        message=\"This is a button\"\n        theme=\"info\"\n        size=\"small\"\n      />\n    </p>\n    <p>\n      <Button\n        message=\"This is a button\"\n        theme=\"info\"\n        size=\"medium\"\n      />\n    </p>\n    <p>\n      <Button\n        message=\"This is a button\"\n        theme=\"info\"\n        size=\"large\"\n      />\n    </p>\n  </Fragment>\n}\n"}]},{"name":"Panel","description":"Panels","props":{"title":{"type":{"name":"string"},"required":true,"description":"A title for the panel","defaultValue":{"value":"'Panel Title'","computed":false}},"list":{"type":{"name":"array"},"required":false,"description":"Array of information"},"theme":{"type":{"name":"string"},"required":false,"description":"Available themes: success, warning"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Panels  */\n\nconst Panel = ({title, list, theme}) => {\n  return <div className=\"panel\">\n    <header className={theme && theme}>\n      <h2>{title}</h2>\n    </header>\n    <div>\n      {list && <ul>\n        {list.map(item=>{\n          return <li key={item}>{item}</li>\n        })}\n      </ul>}\n      {!list && <p>No data to display</p>}\n    </div>\n  </div>\n}\n\nPanel.propTypes = {\n  /** A title for the panel */\n  title: PropTypes.string.isRequired,\n  /** Array of information */\n  list: PropTypes.array,\n  /** Available themes: success, warning */\n  theme: PropTypes.string\n}\n\nPanel.defaultProps = {\n  title: 'Panel Title'\n}\n\nexport default Panel;\n","examples":[{"name":"ExamplePanel","description":"A Panel","code":"import React, { Fragment } from 'react';\nimport Panel from 'sil-react/Panel';\n\n/** A Panel */\n\nexport default function ExamplePanel() {\n  return (\n    <Fragment>\n\n      <Panel />\n\n      <Panel\n        title=\"Best dates to apply\"\n        list={[\n          '1 April 2018 -- 13 April 2018',\n          '5 May -- 13 May 2018'\n        ]}\n        theme=\"success\"\n      />\n\n      <Panel\n        title=\"Do not apply\"\n        list={[\n          '1 April 2018 -- 13 April 2018',\n          '5 May -- 13 May 2018'\n        ]}\n        theme=\"warning\"\n      />\n\n    </Fragment>\n  )\n}\n"}]},{"name":"Table","description":"Used to display tabular data","props":{"data":{"type":{"name":"object"},"required":true,"description":"Object of arrays"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Used to display tabular data */\n\nconst Table = ({data}) => {\n  return <table>\n    {console.log(data)}\n    {data.header &&\n      <thead>\n        {\n          data.header.map(key => {\n            return (\n              <th key={key}>{key}</th>\n            )\n          })\n        }\n      </thead>\n    }\n    {data.body && <tbody>\n      {\n        data.body.map(item=>{\n          return <td>{item}</td>\n        })\n      }\n    </tbody>}\n    {data.footer && <tfoot>\n      {\n        data.footer.map(item=>{\n          return <td>{item}</td>\n        })\n      }\n    </tfoot>}\n  </table>\n}\n\nTable.propTypes = {\n  /** Object of arrays */\n  data: PropTypes.object.isRequired\n}\n\nexport default Table;\n","examples":[{"name":"ExampleTable","description":"A Table","code":"import React from 'react';\nimport Table from 'sil-react/Table';\n\n/** A Table */\n\nexport default function ExampleTable() {\n  return <Table data={{\n    header: ['Name', 'Address', 'Phone'],\n    body: ['Joe Blogs', '555 Blog Street', '555-111-222']\n  }}/>\n}\n"}]},{"name":"Toggle","description":"A toggle component","props":{"width":{"type":{"name":"number"},"required":false,"description":"The width of the button","defaultValue":{"value":"250","computed":false}}},"code":"import React, { Fragment } from 'react';\nimport PropTypes from 'prop-types';\n\n/** A toggle component\n**/\n\nclass Toggle extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      show: false\n    };\n  }\n\n  toggle = () => {\n    this.setState({\n      show: !this.state.show\n    });\n  }\n\n  render() {\n    const {width} = this.props;\n    return (\n      <Fragment>\n        <button style={{width: `${width}px`}} onClick={this.toggle}>{this.state.show ? 'Untoggle' : 'Toggle'}</button>\n        {this.state.show && <p>You found me!</p>}\n      </Fragment>\n    )\n  }\n}\n\nToggle.propTypes = {\n  /** The width of the button */\n  width: PropTypes.number\n}\n\nToggle.defaultProps = {\n  width: 250\n}\n\nexport default Toggle;\n","examples":[{"name":"ExampleToggle","description":"A simple Toggle component","code":"import React from 'react';\nimport Toggle from 'sil-react/Toggle';\n\n/** A simple Toggle component */\n\nexport default function ExampleToggle() {\n  return <Toggle width=\"150\" />\n}\n"}]}]