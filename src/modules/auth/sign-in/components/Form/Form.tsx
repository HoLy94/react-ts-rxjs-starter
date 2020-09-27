import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Constants
import {signInFormConfig} from '../../constants';

// Components
import {FormBuilder} from '../../../../../components/FormBuilder';

// Validation
import {signInSchema} from '../../../../../utils/validations';

// Selectors
import {signingInSelector} from '../../store/selectors';

// Actions
import {signInAsync} from '../../store/actions';

// Models
import {SignInCredentials} from '../../models';

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const signingIn = useSelector(signingInSelector);

  const handleSubmit = (params: SignInCredentials) =>
    dispatch(signInAsync.request(params));

  return (
    <FormBuilder
      validationSchema={signInSchema}
      submitText="Sign in"
      fields={signInFormConfig.fields}
      onSubmit={handleSubmit}
      initialValues={signInFormConfig.initialValues}
      isSubmitDisabled={signingIn}
    />
  );
};

export default SignInForm;
