import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup.string().email('Enter valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password to short')
    .max(16, 'Password to long')
    .required('Password is required'),
});

export const signUpSchema = yup.object().shape({
  email: yup.string().email('Enter valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password to short')
    .max(16, 'Password to long')
    .required('Password is required'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Password are not matching')
    .required('Password is required'),
});
