import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input */
function TextInputBEM({htmlId, name, label, type="text", required=false, onChange, placeholder, value, error, children, ...props}) {
  return (
    <div className="textInput">
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error && 'textInput__input--state-error'}
        {...props} />
        {children}
        { error && <div className="textInput__error" style={{color: 'red'}}>{error}</div>}
    </div>
  )
}

TextInputBEM.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. */
  htmlId: PropTypes.string.isRequired,

  /** Input name */
  name: PropTypes.string.isRequired,

  /** Input Label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to input */
  children: PropTypes.node
};

export default TextInputBEM;
