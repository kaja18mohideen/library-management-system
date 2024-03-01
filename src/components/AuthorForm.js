import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AuthorForm.css';

const AuthorForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', birthDate: '', biography: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Name is required'),
        birthDate: Yup.date().required('Birth date is required'),
        biography: Yup.string().required('Biography is required'),
      })}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Birth Date:</label>
          <Field name="birthDate" type="date" />
          <ErrorMessage name="birthDate" />
        </div>
        <div>
          <label>Biography:</label>
          <Field name="biography" type="text" />
          <ErrorMessage name="biography" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
