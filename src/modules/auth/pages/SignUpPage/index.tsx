import React from 'react';

// Constants
import {AppRoute} from '../../../navigation/constants';

// Components
import AuthLayout from '../../../../components/Layout/AuthLayout';
import SignUpFormPlate from '../../components/SignUpForm';
import AuthFormPlate from '../../components/AuthFormPlate';

const SignUpPage: React.FC = () => (
  <AuthLayout title="Sign up">
    <AuthFormPlate
      title="Sign up"
      withFooter
      footerLinkText="Sign in"
      footerTitle="Already have account?"
      footerLinkUrl={AppRoute.SignIn}
    >
      <SignUpFormPlate />
    </AuthFormPlate>
  </AuthLayout>
);

export default SignUpPage;
