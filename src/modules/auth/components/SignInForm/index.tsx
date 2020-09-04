import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Models
import {SignInCredentials} from '../../models';

// Constants
import {signInFormConfig} from '../../constants';

// Components
import FormBuilder from '../../../../components/FormBuilder';

// Validation
import {signInSchema} from '../../../../utils/validationSchemas';

// Selectors
import {signingInSelector} from '../../store/selectors';

// Actions
import {signInAsync} from '../../store/actions';

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const signingIn = useSelector(signingInSelector);

  const handleSubmit = (params: SignInCredentials) =>
    dispatch(signInAsync.request(params));

  return (
    <FormBuilder
      onSubmit={handleSubmit}
      fields={signInFormConfig.fields}
      initialValues={signInFormConfig.initialValues}
      submitText="Sign in"
      validationSchema={signInSchema}
      isSubmitDisabled={signingIn}
    />
  );
};

export default SignInForm;
