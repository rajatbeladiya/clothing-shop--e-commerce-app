import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { signInWithGoogle } from '../../../utils/firebase';

const SignIn = ({ handleSubmit, onSubmit }) => (
  <div className="sign-in">
    <h3 className="heading">Sign In</h3>
    <Form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field
          className="input-field"
          name="email"
          component={TextField}
          type="input"
          label="Email or Username"
        />
      </div>
      <br />
      <div>
        <Field
          className="input-field"
          name="password"
          component={TextField}
          type="password"
          label="password"
        />
      </div>
      <br />
      <div className="sign-in-buttons">
        <Button
          className="signin"
          variant="contained"
          type="submit"
          color="primary"
        >
          Sign In
        </Button>
        <Button
          className="google-signin"
          variant="contained"
          color="default"
          onClick={signInWithGoogle}
        >
          Sign In with google
        </Button>
      </div>
      <span className="start-here">
        New Customer?&nbsp;
        <Link to="/sign-up">Start here</Link>
      </span>
    </Form>
  </div>
);

SignIn.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
};

SignIn.defaultProps = {
  handleSubmit: () => {},
  onSubmit: () => {},
};

export default reduxForm({ form: 'SignInForm' })(SignIn);
