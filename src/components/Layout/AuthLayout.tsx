import React from 'react';
import {Helmet} from 'react-helmet';
import {Container} from '@material-ui/core';

// Styles
import useStyles from './authLayoutStyle';

type Props = {
  title?: string;
  children: NonNullable<React.ReactNode>;
};

const AuthLayout = (props: Props) => {
  const {title, children} = props;
  const classes = useStyles();

  return (
    <>
      <Helmet>{title && <title>{title}</title>}</Helmet>
      <Container className={classes.container}>{children}</Container>
    </>
  );
};

export default AuthLayout;
