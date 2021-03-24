import React from 'react';

import { Form, Formik } from 'formik';
import { FormikInput } from '../../components/shared/formikAdapters';
import { BillingFormSchema } from '../../utils/validation-schemas';

import css from './Billing.module.scss';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';

interface BillingFormValues {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}

const defaultValues: BillingFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  country: ''
};

export const Billing = () => {
  return (
    <div className={css.formWrapper}>
      <Formik<BillingFormValues>
        initialValues={defaultValues}
        validationSchema={BillingFormSchema}
        onSubmit={val => {
          console.log(val);
        }}
      >
        {({ values }) => (
          <Form className={css.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormikInput name='firstName' label='First Name' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormikInput name='lastName' label='Last Name' />
              </Grid>
              <Grid item xs={12}>
                <FormikInput name='username' label='Username' />
              </Grid>
              <Grid item xs={12}>
                <FormikInput name='email' label='Email' />
              </Grid>
              <Grid item xs={12}>
                <FormikInput name='address' label='Address' />
              </Grid>
              <Grid item xs={12}>
                <FormikInput name='address2' label='Address 2' />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant='outlined' fullWidth={true}>
                  <InputLabel id='billing-country-label'>Country</InputLabel>
                  <Select labelId='billing-country-label' label='Country' displayEmpty>
                    <MenuItem value=''>
                      <em>Choose...</em>
                    </MenuItem>
                    <MenuItem value='Ukraine'>Ukraine</MenuItem>
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='Canada'>Canada</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button variant='contained' color='primary'>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
