import React from 'react';
import {Helmet} from 'react-helmet';
import classNames from 'classnames';
import {CircularProgress, Container} from '@material-ui/core';

// Components
import {MainHeader} from '../Header';
import {ServerErrorMessage} from '../ServerErrorMessage';

// Styles
import useStyles from './styles';

type Props = {
  title?: string;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Main: React.FC<Props> = (props) => {
  const {title = '', children, isLoading = false, className} = props;
  const classes = useStyles();

  return (
    <>
      <Helmet>{title && <title>{title}</title>}</Helmet>
      <MainHeader />
      <Container className={classNames(classes.container__main, className)}>
        {isLoading ? (
          <div className={classes.loading_container}>
            <CircularProgress size={30} />
          </div>
        ) : (
          (children as React.ReactNodeArray)
        )}
      </Container>
      <ServerErrorMessage />
    </>
  );
};

export default Main;
