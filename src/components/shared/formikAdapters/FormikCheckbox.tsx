import React from 'react';
import { useField } from 'formik';
import { FormikCheckboxProps } from '../../../models/formik';
import { Checkbox, FormControlLabel } from '@material-ui/core';

export const FormikCheckbox = ({ label, ...props }: FormikCheckboxProps) => {
  const [field, meta] = useField(props.name);

  return <FormControlLabel control={<Checkbox color='primary' {...field} />} label={label} />;
};
