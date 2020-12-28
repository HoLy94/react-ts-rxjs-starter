import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

// Components
import {MainLayout} from '../../components/Layout';

// Styles
import useStyles from './styles';

// Assets
import errorImg from '../../assets/img/404.png';

const NotFoundPage: React.FC = () => {
  const classes = useStyles();

  return (
    <MainLayout title="404 | Страницу не найдено" className={classes.main_wrap}>
      <div className={classes.text_container}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h5" className={classes.error_message}>
          Страницу не найдено :(
        </Typography>
        <Link to="/" className={classes.link}>
          <Button variant="contained" color="primary">
            GO на главную
          </Button>
        </Link>
      </div>
      <img src={errorImg} alt="crying Cristiano" width="500" height="340" />
    </MainLayout>
  );
};

export default NotFoundPage;
