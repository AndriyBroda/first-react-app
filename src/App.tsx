import React, { useEffect, useState } from 'react';

import { Form, Formik } from 'formik';
import { FormikInput } from './components/shared/formikAdapters';
import { UserFormSchema } from './utils/validation-schemas';
import { Category, deleteCategory, getCategories, postCategory } from './api';
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
  const [categories, setCategories] = useState<Category[]>([]);

  const loadCategories = async () => {
    const res = await getCategories();

    setCategories(res.data.data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const sendCategory = async () => {
    const res = await postCategory({
      iconId: 2,
      name: 'Automotive Parts',
      description: 'Parts for auto'
    });

    console.log(res.data);
  };

  const removeCategory = async (id: number) => {
    await deleteCategory(id);
    loadCategories();
  };

  return (
    <div>
      <button onClick={sendCategory}>Create new category</button>
      {categories.map(item => (
        <div key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          <button onClick={() => removeCategory(item.id)}>Delete</button>
        </div>
      ))}
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
