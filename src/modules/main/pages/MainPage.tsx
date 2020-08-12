import React from 'react';
import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';

// Constants
import {AppRoute} from '../../../constants';

// Components
import MainLayout from '../../../components/Layout/MainLayout';

type Props = {};

const MainPage = (props: Props) => {
  const {} = props;

  return (
    <MainLayout>
      <Typography variant="h6" gutterBottom>
        Home page
      </Typography>
      <Link to={AppRoute.SignIn}>Sign in</Link>
    </MainLayout>
  );
};

export default MainPage;
