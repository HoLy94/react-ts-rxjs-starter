// Models
import {FormFieldTag} from '../../../components/FormBuilder/models';

export const signInFormConfig = {
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
