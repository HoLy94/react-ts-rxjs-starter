import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Constants
import {signUpFormConfig} from '../../constants';

// Models
import {SignUpCredentials} from '../../models';

// Components
import {FormBuilder} from '../../../../../components/FormBuilder';

// Validation
import {signUpSchema} from '../../../../../utils/validations';

// Selectors
import {signingUpSelector} from '../../store/selectors';

// Actions
import {signUpAsync} from '../../store/actions';

const SignUpForm: React.FC = () => {
  const signingUp = useSelector(signingUpSelector);
  const dispatch = useDispatch();

  const handleSubmit = (params: SignUpCredentials) =>
    dispatch(signUpAsync.request(params));

  return (
    <FormBuilder
      onSubmit={handleSubmit}
      fields={signUpFormConfig.fields}
      initialValues={signUpFormConfig.initialValues}
      submitText="Sign up"
      validationSchema={signUpSchema}
      isSubmitDisabled={signingUp}
    />
  );
};

export default SignUpForm;
