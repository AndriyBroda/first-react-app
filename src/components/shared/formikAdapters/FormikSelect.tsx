import React from 'react';
import { FormControl, FormHelperText, InputLabel, Select } from '@material-ui/core';
import { useField } from 'formik';
import { FormikSelectProps } from '../../../models/formik';

export const FormikSelect = ({ name, label, fullWidth, children, ...props }: FormikSelectProps) => {
  const [field, meta] = useField(name);
  const error = meta.touched ? meta.error : undefined;

  return (
    <FormControl variant='outlined' fullWidth={fullWidth} error={!!error}>
      <InputLabel id={`${name}-label`} shrink>
        {label}
      </InputLabel>
      <Select labelId={`${name}-label`} label={label} error={!!error} {...field} {...props}>
        {children}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
