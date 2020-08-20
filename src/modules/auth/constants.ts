// Models
import {FormConfig, FormFieldTag} from '../../components/FormBuilder/models';

export const AUTH_HEADER = 'x-auth-token';
export const AUTH_STORAGE_KEY = 'auth';
export const AuthEndpoint = {
  SIGN_IN: 'users/public/login',
  SIGN_UP: 'users/public/sign-up',
  USER: 'users/current',
};

export const signInFormConfig: FormConfig = {
  initialValues: {
    email: '',
    password: '',
  },
  fields: [
    {
      tag: FormFieldTag.Input,
      type: 'text',
      name: 'email',
      label: 'Email',
      required: true,
    },
    {
      tag: FormFieldTag.Input,
      type: 'password',
      name: 'password',
      label: 'Password',
      required: true,
    },
  ],
};

export const signUpFormConfig: FormConfig = {
  initialValues: {
    email: '',
    password: '',
    confirm: '',
  },
  fields: [
    {
      tag: FormFieldTag.Input,
      type: 'text',
      name: 'email',
      label: 'Email',
      required: true,
    },
    {
      tag: FormFieldTag.Input,
      type: 'password',
      name: 'password',
      label: 'Password',
      required: true,
    },
    {
      tag: FormFieldTag.Input,
      type: 'confirm',
      name: 'confirm',
      label: 'Confirm password',
      required: true,
    },
  ],
};
