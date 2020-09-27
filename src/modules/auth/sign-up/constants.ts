// Models
import {FormFieldTag} from '../../../components/FormBuilder/models';

export const signUpFormConfig = {
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
