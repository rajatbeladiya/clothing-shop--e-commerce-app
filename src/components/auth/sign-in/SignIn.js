import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const SignIn = () => (
  <div className="sign-in">
    <h3 className="heading">Sign In</h3>
    <Form className="sign-in-form">
      <div>
        <Field
          className="input-field"
          name="username"
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
          // type="submit"
          color="primary"
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

export default reduxForm({ form: 'SignInForm' })(SignIn);
