import React from 'react';
import {Helmet} from 'react-helmet';
import {Container} from '@material-ui/core';

// Components
import {MainHeader} from '../Header';

// Styles
import useStyles from './styles';

type Props = {
  title?: string;
  children: React.ReactNodeArray;
};

const Main: React.FC<Props> = (props) => {
  const {title = '', children} = props;
  const classes = useStyles();

  return (
    <>
      <Helmet>{title && <title>{title}</title>}</Helmet>
      <MainHeader />
      <Container className={classes.container__main}>{children}</Container>
    </>
  );
};

export default Main;
