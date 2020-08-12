import React from 'react';

// HOCs
import withSignUp, {WithSignUpProps} from '../../hoc/withSignUp';

// Components
import AuthLayout from '../../../../components/Layout/AuthLayout';
import SignUpForm from '../../components/SignUpForm';

type Props = WithSignUpProps;

const SignUpPage = (props: Props) => {
  const {} = props;

  return (
    <AuthLayout title="Sign up">
      <SignUpForm />
    </AuthLayout>
  );
};

export default withSignUp(SignUpPage);
