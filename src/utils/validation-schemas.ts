import * as Yup from 'yup';

export const BillingFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Minimum 3 chars')
    .max(15, 'Maximum 15 chars')
    .required('Valid first name is required'),

  lastName: Yup.string()
    .min(3, 'Minimum 3 chars')
    .max(15, 'Maximum 15 chars')
    .required('Valid last name is required'),

  username: Yup.string()
    .min(3, 'Minimum 3 chars')
    .max(15, 'Maximum 15 chars')
    .required('Valid username is required'),

  email: Yup.string()
    .email('Please enter a valid email for shipping updates')
    .required('Valid email is required'),

  address: Yup.string()
    .min(5, 'Minimum 5 chars')
    .max(64, 'Maximum 64 chars')
    .required('Please enter your shipping address'),

  address2: Yup.string().min(5, 'Minimum 5 chars').max(64, 'Maximum 64 chars'),

  country: Yup.string().trim().required('Please select a valid country'),

  state: Yup.string().min(3, 'Minimum 3 chars').max(24, 'Maximum 24 chars'),

  zip: Yup.string().nullable().length(5, 'ZIP should be exactly 5 chars').required('Valid zip is required')
});
