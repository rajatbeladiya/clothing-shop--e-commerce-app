import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <div className="sign-up">
    <h3 className="heading">Sign Up</h3>
    <Form className="sign-up-form">
      <div>
        <Field
          className="input-field"
          name="name"
          component={TextField}
          type="input"
          label="Display Name"
        />
      </div>
      <br />
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
      <div>
        <Field
          className="input-field"
          name="confirmpassword"
          component={TextField}
          type="password"
          label="Confirm Password"
        />
      </div>
      <br />
      <div className="sign-up-button">
        <Button variant="contained" type="submit" color="primary">Sign Up</Button>
      </div>
      <span className="sign-in">
        Already a Customer?&nbsp;
        <Link to="/sign-in">Sign In</Link>
      </span>
    </Form>
  </div>
);

export default reduxForm({ form: 'SignUpForm' })(SignUp);
