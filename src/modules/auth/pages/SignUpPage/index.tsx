import React from 'react';

// HOCs
import withSignUp, {WithSignUpProps} from '../../hoc/withSignUp';

// Components
import AuthLayout from '../../../../components/Layout/AuthLayout';
import SignUpFormPlate from '../../components/SignUpFormPlate';

type Props = WithSignUpProps;

const SignUpPage = (props: Props) => {
  const {} = props;

  return (
    <AuthLayout title="Sign up">
      <SignUpFormPlate />
    </AuthLayout>
  );
};

export default withSignUp(SignUpPage);
