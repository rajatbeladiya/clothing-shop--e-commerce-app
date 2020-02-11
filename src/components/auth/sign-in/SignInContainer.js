import React from 'react';

import SignIn from './SignIn';
import { required } from '../../../utils/validators';

class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.validateSignInForm = this.validateSignInForm.bind(this);
  }

  validateSignInForm(values) { // eslint-disable-line
    const errors = {};

    errors.email = required(values.email) && 'Email is required';
    errors.password = required(values.password) && 'Password is required';

    return errors;
  }

  onSubmit(values) { // eslint-disable-line
    console.log('values====', values);
  }

  render() {
    return (
      <SignIn
        onSubmit={this.onSubmit}
        validate={this.validateSignInForm}
      />
    );
  }
}

export default SignInContainer;
