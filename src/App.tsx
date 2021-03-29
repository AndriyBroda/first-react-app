import React, { useEffect, useState } from 'react';

import { Form, Formik } from 'formik';
import { FormikInput } from './components/shared/formikAdapters';
import { UserFormSchema } from './utils/validation-schemas';
import { Category, deleteCategory, getCategories, postCategory } from './api';
import { loginUser, registerUser } from './api/auth';
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
  const createUser = () => {
    registerUser({
      email: 'jack_sparrow@gmail.com',
      firstName: 'Jack',
      lastName: 'Sparrow',
      password: '*secure password*'
    });
  };

  const login = async () => {
    try {
      const res = await loginUser({
        email: 'jack_sparrow@gmail.com',
        password: '*secure password*'
      });

      const { access_token, refresh_token } = res.data;

      localStorage.setItem('token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      console.log(res.data);
    } catch (error) {
      console.log('err' + error);
    }
  };

  return (
    <div>
      <button onClick={createUser}>Register</button>
      <button onClick={login}>Login</button>

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
