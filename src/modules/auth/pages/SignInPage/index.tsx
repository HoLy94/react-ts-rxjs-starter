import React from 'react';

// Constants
import {AppRoute} from '../../../../constants';

// Components
import AuthLayout from '../../../../components/Layout/AuthLayout';
import SignInForm from '../../components/SignInForm';
import AuthFormPlate from '../../components/AuthFormPlate';

type Props = {};

const SignInPage = (props: Props) => {
  const {} = props;

  return (
    <AuthLayout title="Sing in">
      <AuthFormPlate
        title="Sign in"
        withFooter
        footerLinkText="Dont have account?"
        footerTitle="Sign up"
        footerLinkUrl={AppRoute.SignUp}
      >
        <SignInForm />
      </AuthFormPlate>
    </AuthLayout>
  );
};

export default SignInPage;
