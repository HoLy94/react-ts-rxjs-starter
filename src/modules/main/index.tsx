import React from 'react';
import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';

// Constants
import {AppRoute} from '../navigation/constants';

// Components
import {MainLayout} from '../../components/Layout';

const MainPage: React.FC = () => (
  <MainLayout title="Main page">
    <Typography variant="h6" gutterBottom>
      Home page
    </Typography>
    <Link to={AppRoute.SignIn}>Sign in</Link>
  </MainLayout>
);

export default MainPage;
