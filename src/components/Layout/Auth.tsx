import React from 'react';
import {Helmet} from 'react-helmet';
import {Container} from '@material-ui/core';

// Styles
import useStyles from './styles';

type Props = {
  title?: string;
  children: NonNullable<React.ReactNode>;
};

const Auth: React.FC<Props> = (props) => {
  const {title = '', children} = props;
  const classes = useStyles();

  return (
    <>
      <Helmet>{title && <title>{title}</title>}</Helmet>
      <Container className={classes.container__auth}>{children}</Container>
    </>
  );
};

export default Auth;
