import React from 'react';

// HOCs
import withSignIn, {WithSignInProps} from '../../hoc/withSignIn';

// Components
import AuthLayout from '../../../../components/Layout/AuthLayout';
import SignInForm from '../../components/SignInForm';

type Props = WithSignInProps;

const SignInPage = (props: Props) => {
  const {} = props;

  return (
    <AuthLayout title="Sing in">
      <SignInForm />
    </AuthLayout>
  );
};

export default withSignIn(SignInPage);
