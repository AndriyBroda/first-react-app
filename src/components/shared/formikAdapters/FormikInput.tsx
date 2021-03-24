import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';
import { FormikTextInputProps } from '../../../models/formik';

export const FormikInput = ({ label, ...props }: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return (
    <TextField
      type='text'
      variant='outlined'
      label={label}
      error={!!error}
      inputProps={props}
      helperText={error}
      fullWidth={true}
      {...field}
    />
  );
};
