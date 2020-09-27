import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

// Constants
import {AppRoute} from '../../modules/navigation/constants';

// Styles
import useStyles from './styles';

const BackButton: React.FC = () => {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={AppRoute.Home}>
      <Button variant="text" color="primary">
        Назад
      </Button>
    </Link>
  );
};

export default BackButton;
