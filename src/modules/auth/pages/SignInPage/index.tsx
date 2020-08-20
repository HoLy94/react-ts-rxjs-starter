import React from 'react';

// HOCs
import withSignIn, {WithSignInProps} from '../../hoc/withSignIn';

// Components
import AuthLayout from '../../../../components/Layout/AuthLayout';
import SignInFormPlate from '../../components/SignInFormPlate';

type Props = WithSignInProps;

const SignInPage = (props: Props) => {
  const {} = props;

  return (
    <AuthLayout title="Sing in">
      <SignInFormPlate />
    </AuthLayout>
  );
};

export default withSignIn(SignInPage);
