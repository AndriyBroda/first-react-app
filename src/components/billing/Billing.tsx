import React from 'react';

import { Form, Formik } from 'formik';

import { FormikInput, FormikSelect, FormikCheckbox, FormikRadioGroup } from '../shared/formikAdapters';

import { BillingFormSchema } from '../../utils/validation-schemas';
import { Box, Button, FormControlLabel, Grid, MenuItem, Radio } from '@material-ui/core';

import css from './Billing.module.scss';
interface BillingFormValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  country: string;
  address: string;
  address2: string;
  state: string;
  zip: number | null;
}

const defaultValues: BillingFormValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  country: ' ', // Should be something here otherwise label is lined-through (Material UI Behaviour)
  address: '',
  address2: '',
  state: '',
  zip: null
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
        {({ initialValues }) => (
          <Form className={css.form}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormikInput name='firstName' label='First Name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormikInput name='lastName' label='Last Name' />
                </Grid>
                <Grid item xs={12}>
                  <FormikInput name='username' label='Username' placeholder='Username' />
                </Grid>
                <Grid item xs={12}>
                  <FormikInput name='email' label='Email' />
                </Grid>
                <Grid item xs={12}>
                  <FormikInput name='address' label='Address' />
                </Grid>
                <Grid item xs={12}>
                  <FormikInput
                    name='address2'
                    label='Address 2 (Optional)'
                    placeholder='Apartment or suite'
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <FormikSelect name='country' label='Country' fullWidth={true} displayEmpty>
                    <MenuItem value={initialValues.country} disabled>
                      <em>Choose...</em>
                    </MenuItem>
                    <MenuItem value='Ukraine'>Ukraine</MenuItem>
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='Canada'>Canada</MenuItem>
                  </FormikSelect>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <FormikInput name='state' label='State' />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormikInput type='number' name='zip' label='Zip' />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <FormikCheckbox
                name='shipping-address-check'
                label='Shipping address is the same as my billing address'
              />
              <FormikCheckbox name='save-info-check' label='Save information for next time' />
            </Box>
            <Box>
              <FormikRadioGroup name='payment' label='Payment'>
                <FormControlLabel
                  value='credit-card'
                  control={<Radio color='primary' />}
                  label='Credit card'
                />
                <FormControlLabel value='debit-card' control={<Radio color='primary' />} label='Debit card' />
                <FormControlLabel value='paypal' control={<Radio color='primary' />} label='PayPal' />
              </FormikRadioGroup>
            </Box>
            <Button variant='contained' type='submit' color='primary'>
              Continue to checkout
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
