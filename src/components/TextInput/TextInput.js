import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import './TextInput.css';

/** Text input */
function TextInput({htmlId, name, label, type="text", required=false, onChange, placeholder, value, error, children, ...props}) {
  return (
    <div style={{
      marginBottom: 16,
      position: 'relative',
      display: 'inline-block'}}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        className="textInput"
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error && { border: 'solid 1px red' }}
        {...props} />
        {children}
        { error && <div className="error" style={{color: 'red'}}>{error}</div>}
    </div>
  )
}

TextInput.propTypes = {
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

export default TextInput;
