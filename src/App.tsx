import React from 'react';

import { Form, Formik } from 'formik';
import { FormikInput } from './components/shared/formikAdapters';
import { UserFormSchema } from './utils/validation-schemas';

interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const defaultValues: UserFormValues = {
  firstName: '',
  lastName: '',
  email: ''
};

function App() {
  return (
    <div>
      <Formik<UserFormValues>
        initialValues={defaultValues}
        validationSchema={UserFormSchema}
        onSubmit={val => {
          console.log(val);
        }}
      >
        <Form>
          <FormikInput name='firstName' label='First Name' />
          <FormikInput name='lastName' label='Last Name' />
          <FormikInput name='email' label='Email' />
          <button>Send</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
