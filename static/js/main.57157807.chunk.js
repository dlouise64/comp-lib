(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t){e.exports=[{name:"Button",description:"Use for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",props:{message:{type:{name:"string"},required:!1,description:"Message to display on the button",defaultValue:{value:"'Submit'",computed:!1}},theme:{type:{name:"string"},required:!1,description:"Themes available: info",defaultValue:{value:"'default'",computed:!1}},size:{type:{name:"string"},required:!1,description:"Sizes available: small, medium, large",defaultValue:{value:"'small'",computed:!1}}},code:"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Use for actions in forms, dialogs, and more with support for multiple sizes, states, and more. */\n\nconst Button = ({message, theme, size}) => {\n  return <button className={`btn ${theme && theme} ${size && size}`}>{message}</button>\n}\n\nButton.propTypes = {\n  /** Message to display on the button */\n  message: PropTypes.string,\n  /** Themes available: info */\n  theme: PropTypes.string,\n  /** Sizes available: small, medium, large */\n  size: PropTypes.string\n}\n\nButton.defaultProps = {\n  message: 'Submit',\n  theme: 'default',\n  size: 'small'\n}\n\nexport default Button;\n",examples:[{name:"ExampleButton",description:"Includes several predefined button styles,\neach serving its own semantic purpose,\nwith a few extras thrown in for more control.",code:'import React, { Fragment } from \'react\';\nimport Button from \'sil-react/Button\';\n\n/** Includes several predefined button styles,\n  * each serving its own semantic purpose,\n  * with a few extras thrown in for more control.\n**/\n\nexport default function ExampleButton() {\n  return <Fragment>\n    <p>\n      <Button />\n    </p>\n    <p>\n      <Button message="This is a button" />\n    </p>\n    <p>\n      <Button\n        message="This is a button"\n        theme="info"\n      />\n    </p>\n    <h3>Sizes</h3>\n    <p>\n      <Button\n        message="This is a button"\n        theme="info"\n        size="small"\n      />\n    </p>\n    <p>\n      <Button\n        message="This is a button"\n        theme="info"\n        size="medium"\n      />\n    </p>\n    <p>\n      <Button\n        message="This is a button"\n        theme="info"\n        size="large"\n      />\n    </p>\n  </Fragment>\n}\n'}]},{name:"Panel",description:"Panels",props:{title:{type:{name:"string"},required:!1,description:"A title for the panel",defaultValue:{value:"'Panel Title'",computed:!1}},list:{type:{name:"array"},required:!1,description:"Array of information"},theme:{type:{name:"string"},required:!1,description:"Available themes: success, warning"}},code:"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Panels  */\n\nconst Panel = ({title, list, theme}) => {\n  return <div className=\"panel\">\n    <header className={theme && theme}>\n      <h2>{title}</h2>\n    </header>\n    <div>\n      {list && <ul>\n        {list.map(item=>{\n          return <li key={item}>{item}</li>\n        })}\n      </ul>}\n      {!list && <p>No data to display</p>}\n    </div>\n  </div>\n}\n\nPanel.propTypes = {\n  /** A title for the panel */\n  title: PropTypes.string.isRequired,\n  /** Array of information */\n  list: PropTypes.array,\n  /** Available themes: success, warning */\n  theme: PropTypes.string\n}\n\nPanel.defaultProps = {\n  title: 'Panel Title'\n}\n\nexport default Panel;\n",examples:[{name:"ExamplePanel",description:"A Panel",code:"import React, { Fragment } from 'react';\nimport Panel from 'sil-react/Panel';\n\n/** A Panel */\n\nexport default function ExamplePanel() {\n  return (\n    <Fragment>\n\n      <Panel />\n\n      <Panel\n        title=\"Best dates to apply\"\n        list={[\n          '1 April 2018 -- 13 April 2018',\n          '5 May -- 13 May 2018'\n        ]}\n        theme=\"success\"\n      />\n\n      <Panel\n        title=\"Do not apply\"\n        list={[\n          '1 April 2018 -- 13 April 2018',\n          '5 May -- 13 May 2018'\n        ]}\n        theme=\"warning\"\n      />\n\n    </Fragment>\n  )\n}\n"}]},{name:"Table",description:"Used to display tabular data",props:{data:{type:{name:"object"},required:!0,description:"Object of arrays"}},code:"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Used to display tabular data */\n\nconst Table = ({data}) => {\n  return <table>\n    {console.log(data)}\n    {data.header &&\n      <thead>\n        {\n          data.header.map(key => {\n            return (\n              <th key={key}>{key}</th>\n            )\n          })\n        }\n      </thead>\n    }\n    {data.body && <tbody>\n      {\n        data.body.map(item=>{\n          return <td>{item}</td>\n        })\n      }\n    </tbody>}\n    {data.footer && <tfoot>\n      {\n        data.footer.map(item=>{\n          return <td>{item}</td>\n        })\n      }\n    </tfoot>}\n  </table>\n}\n\nTable.propTypes = {\n  /** Object of arrays */\n  data: PropTypes.object.isRequired\n}\n\nexport default Table;\n",examples:[{name:"ExampleTable",description:"A Table",code:"import React from 'react';\nimport Table from 'sil-react/Table';\n\n/** A Table */\n\nexport default function ExampleTable() {\n  return <Table data={{\n    header: ['Name', 'Address', 'Phone'],\n    body: ['Joe Blogs', '555 Blog Street', '555-111-222']\n  }}/>\n}\n"}]},{name:"Toggle",description:"A toggle component",props:{width:{type:{name:"number"},required:!1,description:"The width of the button",defaultValue:{value:"250",computed:!1}}},code:"import React, { Fragment } from 'react';\nimport PropTypes from 'prop-types';\n\n/** A toggle component\n**/\n\nclass Toggle extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      show: false\n    };\n  }\n\n  toggle = () => {\n    this.setState({\n      show: !this.state.show\n    });\n  }\n\n  render() {\n    const {width} = this.props;\n    return (\n      <Fragment>\n        <button style={{width: `${width}px`}} onClick={this.toggle}>{this.state.show ? 'Untoggle' : 'Toggle'}</button>\n        {this.state.show && <p>You found me!</p>}\n      </Fragment>\n    )\n  }\n}\n\nToggle.propTypes = {\n  /** The width of the button */\n  width: PropTypes.number\n}\n\nToggle.defaultProps = {\n  width: 250\n}\n\nexport default Toggle;\n",examples:[{name:"ExampleToggle",description:"A simple Toggle component",code:"import React from 'react';\nimport Toggle from 'sil-react/Toggle';\n\n/** A simple Toggle component */\n\nexport default function ExampleToggle() {\n  return <Toggle width=\"150\" />\n}\n"}]}]},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=function(e){var t=e.message,n=e.theme,a=e.size;return r.a.createElement("button",{className:"btn ".concat(n&&n," ").concat(a&&a)},t)};l.defaultProps={message:"Submit",theme:"default",size:"small"};var o=l;function s(){return r.a.createElement(a.Fragment,null,r.a.createElement("p",null,r.a.createElement(o,null)),r.a.createElement("p",null,r.a.createElement(o,{message:"This is a button"})),r.a.createElement("p",null,r.a.createElement(o,{message:"This is a button",theme:"info"})),r.a.createElement("h3",null,"Sizes"),r.a.createElement("p",null,r.a.createElement(o,{message:"This is a button",theme:"info",size:"small"})),r.a.createElement("p",null,r.a.createElement(o,{message:"This is a button",theme:"info",size:"medium"})),r.a.createElement("p",null,r.a.createElement(o,{message:"This is a button",theme:"info",size:"large"})))}n.d(t,"default",function(){return s})},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=function(e){var t=e.title,n=e.list,a=e.theme;return r.a.createElement("div",{className:"panel"},r.a.createElement("header",{className:a&&a},r.a.createElement("h2",null,t)),r.a.createElement("div",null,n&&r.a.createElement("ul",null,n.map(function(e){return r.a.createElement("li",{key:e},e)})),!n&&r.a.createElement("p",null,"No data to display")))};l.defaultProps={title:"Panel Title"};var o=l;function s(){return r.a.createElement(a.Fragment,null,r.a.createElement(o,null),r.a.createElement(o,{title:"Best dates to apply",list:["1 April 2018 -- 13 April 2018","5 May -- 13 May 2018"],theme:"success"}),r.a.createElement(o,{title:"Do not apply",list:["1 April 2018 -- 13 April 2018","5 May -- 13 May 2018"],theme:"warning"}))}n.d(t,"default",function(){return s})},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),o=n(2),s=n(4),i=n(3),m=n(5),c=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).toggle=function(){n.setState({show:!n.state.show})},n.state={show:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.width;return r.a.createElement(a.Fragment,null,r.a.createElement("button",{style:{width:"".concat(e,"px")},onClick:this.toggle},this.state.show?"Untoggle":"Toggle"),this.state.show&&r.a.createElement("p",null,"You found me!"))}}]),t}(r.a.Component);c.defaultProps={width:250};var u=c;function p(){return r.a.createElement(u,{width:"150"})}n.d(t,"default",function(){return p})},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=function(e){var t=e.data;return r.a.createElement("table",null,console.log(t),t.header&&r.a.createElement("thead",null,t.header.map(function(e){return r.a.createElement("th",{key:e},e)})),t.body&&r.a.createElement("tbody",null,t.body.map(function(e){return r.a.createElement("td",null,e)})),t.footer&&r.a.createElement("tfoot",null,t.footer.map(function(e){return r.a.createElement("td",null,e)})))};function o(){return r.a.createElement(l,{data:{header:["Name","Address","Phone"],body:["Joe Blogs","555 Blog Street","555-111-222"]}})}n.d(t,"default",function(){return o})},,,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},,function(e,t,n){var a={"./Button/ExampleButton":9,"./Button/ExampleButton.js":9,"./Panel/ExamplePanel":10,"./Panel/ExamplePanel.js":10,"./Table/ExampleTable":12,"./Table/ExampleTable.js":12,"./Toggle/ExampleToggle":11,"./Toggle/ExampleToggle.js":11};function r(e){var t=l(e);return n(t)}function l(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=22},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),o=n.n(l),s=(n(20),n(1)),i=n(2),m=n(4),c=n(3),u=n(5),p=function(e){var t=e.components;return r.a.createElement("div",{className:"navigation"},r.a.createElement("h2",null,"Components"),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"#".concat(e)},e))})),r.a.createElement("a",{href:"https://github.com/dlouise64/comp-lib"},"View on Github"))},d=n(7),h=n.n(d),f=n(14),g=n.n(f),E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){h.a.registerLanguage("javascript",g.a),h.a.highlightBlock(this.element)}},{key:"render",value:function(){var e=this;return r.a.createElement("pre",{ref:function(t){e.element=t}},r.a.createElement("code",null,this.props.children))}}]),t}(r.a.Component),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(c.a)(t).call(this,e))).toggleCode=function(e){e.preventDefault(),n.setState(function(e){return{showCode:!e.showCode}})},n.state={showCode:!1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.showCode,t=this.props.example,a=t.code,l=t.description,o=t.name,s=n(22)("./".concat(this.props.componentName,"/").concat(o)).default;return r.a.createElement("div",null,l&&r.a.createElement("h4",null,l),r.a.createElement("div",{className:"codeexample"},r.a.createElement(s,null)),r.a.createElement("p",null,r.a.createElement("button",{style:{width:"150px"},onClick:this.toggleCode},e?"Hide":"Show"," Code")),e&&r.a.createElement(E,null,a))}}]),t}(r.a.Component),y=function(e){var t=e.props;return r.a.createElement("table",{className:"props"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Default"),r.a.createElement("th",null,"Required"))),r.a.createElement("tbody",null,Object.keys(t).map(function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e),r.a.createElement("td",null,t[e].description),r.a.createElement("td",null,t[e].type.name),r.a.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value),r.a.createElement("td",null,t[e].required&&"true"))})))},v=function(e){var t=e.component,n=t.name,a=t.description,l=t.props,o=t.examples;return r.a.createElement("div",{className:"componentpage"},r.a.createElement("h2",null,n),r.a.createElement("p",null,a),r.a.createElement("h3",null,"Example",o.length>1&&"s"),o.length>0?o.map(function(e){return r.a.createElement(b,{key:e.code,example:e,componentName:n})}):"No examples exist.",r.a.createElement("h3",null,"Props"),l?r.a.createElement(y,{props:l}):"This component accepts no props.")},T=n(6),w=n.n(T),x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={route:window.location.hash.substr(1)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",function(){e.setState({route:window.location.hash.substr(1)})})}},{key:"render",value:function(){var e=this.state.route,t=e?w.a.filter(function(t){return t.name===e})[0]:w.a[0];return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Service Innovation Lab")),r.a.createElement("div",{className:"parent"},r.a.createElement("div",{className:"left"},r.a.createElement(p,{components:w.a.map(function(e){return e.name})})),r.a.createElement("div",{className:"right"},r.a.createElement(v,{component:t}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,2,1]]]);
//# sourceMappingURL=main.57157807.chunk.js.map