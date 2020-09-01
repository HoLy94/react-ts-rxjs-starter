import React from 'react';

// Constants
import {signInFormConfig} from '../../constants';

// Components
import FormBuilder from '../../../../components/FormBuilder';

// HOCs
import withSignIn, {WithSignInProps} from '../../hoc/withSignIn';

// Validation
import {signInSchema} from '../../../../utils/validationSchemas';

const SignInForm: React.FC<WithSignInProps> = (props) => {
  const {signIn, signingIn} = props;

  return (
    <FormBuilder
      onSubmit={signIn}
      fields={signInFormConfig.fields}
      initialValues={signInFormConfig.initialValues}
      submitText="Sign in"
      validationSchema={signInSchema}
      isSubmitDisabled={signingIn}
    />
  );
};

export default withSignIn(SignInForm);
