import React from 'react';

// Components
import {SignUpForm} from './components/Form';
import {FormPlate} from '../components/FormPlate';
import {AuthLayout} from '../../../components/Layout';

// Constants
import {AppRoute} from '../../navigation/constants';

const SignUpPage: React.FC = () => (
  <AuthLayout title="Brands customization | Sing up">
    <FormPlate
      title="Sign up"
      withFooter
      footerLinkText="Sign in"
      footerTitle="Already have account?"
      footerLinkUrl={AppRoute.SignIn}
    >
      <SignUpForm />
    </FormPlate>
  </AuthLayout>
);

export default SignUpPage;
