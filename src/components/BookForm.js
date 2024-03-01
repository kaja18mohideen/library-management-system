import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './BookForm.css';
const BookForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }}
      validationSchema={Yup.object({
        title: Yup.string().required('Title is required'),
        author: Yup.string().required('Author is required'),
        isbn: Yup.string().required('ISBN is required'),
        publicationDate: Yup.date().required('Publication date is required'),
      })}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Title:</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />
        </div>
        <div>
          <label>Author:</label>
          <Field name="author" type="text" />
          <ErrorMessage name="author" />
        </div>
        <div>
          <label>ISBN:</label>
          <Field name="isbn" type="text" />
          <ErrorMessage name="isbn" />
        </div>
        <div>
          <label>Publication Date:</label>
          <Field name="publicationDate" type="date" />
          <ErrorMessage name="publicationDate" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
