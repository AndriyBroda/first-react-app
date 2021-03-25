import React from 'react';
import { useField } from 'formik';
import { FormikRadioGroupProps } from '../../../models/formik';
import { FormControl, FormLabel, RadioGroup } from '@material-ui/core';

export const FormikRadioGroup = ({ label, children, ...props }: FormikRadioGroupProps) => {
  const [field, meta] = useField(props.name);

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{label}</FormLabel>
      <RadioGroup aria-label={label} {...field}>
        {children}
      </RadioGroup>
    </FormControl>
  );
};
