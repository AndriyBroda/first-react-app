import * as Yup from 'yup';

export const BillingFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Minimum 3 chars')
    .max(10, 'Maximum 10 chars')
    .required('Valid first name is required'),
  lastName: Yup.string()
    .min(3, 'Minimum 3 chars')
    .max(10, 'Maximum 10 chars')
    .required('Valid last name is required'),
  email: Yup.string().email('Please enter a valid email for shipping updates').required()
});
