import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';

import './PassportInput.css';

class PassportInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        passport_no: '',
        password: ''
      },
      errors: {},
      submitted: false
    }
  }

  onChange = event => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  passwordQuality(password) {
    if(!password) return null;
    if(password.length >= this.props.minPasswordLength) return 100;
    const percentOfMinLength = parseInt(password.length/this.props.minPasswordLength * 100, 10);
    return percentOfMinLength;
  }

  validate({passport_no}) {
    const errors = {};
    // const {minPasswordLength} = this.props;

    if(!passport_no) errors.passport_no = 'passport number required';
    // if(password.length < minPasswordLength) errors.password = `Password must be at least ${minPasswordLength} characters`;
    this.setState({errors});
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = () => {
    const {user} = this.state;
    const formIsValid = this.validate(user);
    if(formIsValid) {
      // this.props.onSubmit(user);
      this.setState({submitted: true});
    }
  }
  render() {
    const {errors} = this.state;
    const {passport_no} = this.state.user;
    return (
      <div className="PassportInput">
        <TextInput
          htmlId="registration-form-passport_no"
          name="passport_no"
          onChange={this.onChange}
          label="Passport no."
          value={passport_no}
          error={errors.passport_no}
          required
        />
        <input style={{marginLeft: '10px'}} className="btn info" type="submit" value="Submit" onClick={this.onSubmit} />
        { errors.passport_no && <div className="error" style={{color: 'red'}}>{errors.passport_no}</div>}
      </div>
    );
  }
}

PassportInput.propTypes = {
  /** message displayed upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when form is submitted */
  // onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */
  minPasswordLength: PropTypes.number
};

PassportInput.defaultProps = {
  confirmationMessage: "Thanks for registering",
  minPasswordLength: 8
}

export default PassportInput;
