import React from 'react';

// Constants
import {signUpFormConfig} from '../../constants';

// Components
import FormBuilder from '../../../../components/FormBuilder';

// HOCs
import withSignUp, {WithSignUpProps} from '../../hoc/withSignUp';

// Validation
import {signUpSchema} from '../../../../utils/validationSchemas';

const SignUpForm: React.FC<WithSignUpProps> = (props) => {
  const {signUp, signingUp} = props;

  return (
    <FormBuilder
      validationSchema={signUpSchema}
      submitText="Sign up"
      fields={signUpFormConfig.fields}
      onSubmit={signUp}
      initialValues={signUpFormConfig.initialValues}
      isSubmitDisabled={signingUp}
    />
  );
};

export default withSignUp(SignUpForm);
