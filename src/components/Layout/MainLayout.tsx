import React from 'react';
import {Helmet} from 'react-helmet';
import {Container} from '@material-ui/core';

// Components
import MainHeader from '../Header/MainHeader';

type Props = {
  title?: string;
  children: React.ReactNodeArray;
};

const MainLayout: React.FC<Props> = (props) => {
  const {title = '', children} = props;

  return (
    <>
      <Helmet>{title && <title>{title}</title>}</Helmet>
      <MainHeader />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
