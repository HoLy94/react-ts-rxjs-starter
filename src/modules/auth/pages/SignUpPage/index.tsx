import React from 'react';

// Constants
import {AppRoute} from '../../../../constants';

// Components
import AuthLayout from '../../../../components/Layout/AuthLayout';
import SignUpFormPlate from '../../components/SignUpForm';
import AuthFormPlate from '../../components/AuthFormPlate';

type Props = {};

const SignUpPage = (props: Props) => {
  const {} = props;

  return (
    <AuthLayout title="Sign up">
      <AuthFormPlate
        title="Sign up"
        withFooter
        footerLinkText="Already have account?"
        footerTitle="Sign in"
        footerLinkUrl={AppRoute.SignIn}
      >
        <SignUpFormPlate />
      </AuthFormPlate>
    </AuthLayout>
  );
};

export default SignUpPage;
