import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Constants
import {signUpFormConfig} from '../../constants';

// Components
import FormBuilder from '../../../../components/FormBuilder';

// Validation
import {signUpSchema} from '../../../../utils/validationSchemas';

// Selectors
import {signingUpSelector} from '../../store/selectors';

// Actions
import {signUpAsync} from '../../store/actions';
import {SignUpCredentials} from '../../models';

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const signingUp = useSelector(signingUpSelector);

  const handleSubmit = (params: SignUpCredentials) =>
    dispatch(signUpAsync.request(params));

  return (
    <FormBuilder
      validationSchema={signUpSchema}
      submitText="Sign up"
      fields={signUpFormConfig.fields}
      onSubmit={handleSubmit}
      initialValues={signUpFormConfig.initialValues}
      isSubmitDisabled={signingUp}
    />
  );
};

export default SignUpForm;
