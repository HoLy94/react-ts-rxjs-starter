import React from 'react';

// Constants
import {AppRoute} from '../../../../constants';

// Components
import AuthLayout from '../../../../components/Layout/AuthLayout';
import SignInForm from '../../components/SignInForm';
import AuthFormPlate from '../../components/AuthFormPlate';

const SignInPage: React.FC = () => (
  <AuthLayout title="Sing in">
    <AuthFormPlate
      title="Sign in"
      withFooter
      footerLinkText="Sign up"
      footerTitle="Dont have account?"
      footerLinkUrl={AppRoute.SignUp}
    >
      <SignInForm />
    </AuthFormPlate>
  </AuthLayout>
);

export default SignInPage;
