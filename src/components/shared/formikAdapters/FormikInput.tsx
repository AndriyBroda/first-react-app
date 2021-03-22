import React from 'react';
import { useField } from 'formik';
import { FormikTextInputProps, Input } from '../input';

export const FormikInput = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);

  const error = meta.touched ? meta.error : undefined;

  return <Input {...field} {...props} error={error} />;
};
