import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Username should be an email')
    .required('Field required'),
  password: Yup.string()
    .required('Field required'),
});

const LoginForm = () => {
  const handleSubmit = (values) => {
    alert('Login Successful');
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="emailField">Email:</label>
            <Field id="emailField" name="email" type="email" />
            <div id="emailError">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div>
            <label htmlFor="pswField">Password:</label>
            <Field id="pswField" name="password" type="password" />
            <div id="pswError">
              <ErrorMessage name="password" />
            </div>
          </div>
          <button id="submitBtn" type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
