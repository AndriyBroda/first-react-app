import * as Yup from 'yup';

export const UserFormSchema = Yup.object().shape({
  firstName: Yup.string().min(3, 'Minimum 3 chars').max(10, 'Maximum 10 chars').required(),
  lastName: Yup.string().min(3, 'Minimum 3 chars').max(10, 'Maximum 10 chars').required(),
  email: Yup.string().email('Invalid email').required()
});
