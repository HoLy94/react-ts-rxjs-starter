import React from 'react';

// Components
import {SignInForm} from './components/Form';
import {FormPlate} from '../components/FormPlate';
import {AuthLayout} from '../../../components/Layout';

// Constants
import {AppRoute} from '../../navigation/constants';

const SignIn: React.FC = () => (
  <AuthLayout title="Brands customization | Sing in">
    <FormPlate
      title="Sign in"
      withFooter
      footerLinkText="Sign up"
      footerTitle="Dont have account?"
      footerLinkUrl={AppRoute.SignUp}
    >
      <SignInForm />
    </FormPlate>
  </AuthLayout>
);

export default SignIn;
