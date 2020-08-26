import React from 'react';
import {Link} from 'react-router-dom';
import {Paper, Typography} from '@material-ui/core';

// Styles
import useStyles from './style';

type Props = {
  title?: string;
  withFooter?: boolean;
  footerTitle?: string;
  footerLinkText?: string;
  footerLinkUrl?: string;
  children: NonNullable<React.ReactNode>;
};

const AuthFormPlate: React.FC<Props> = (props: Props) => {
  const {
    title,
    children,
    footerLinkText,
    footerLinkUrl,
    footerTitle,
    withFooter = true,
  } = props;
  const classes = useStyles();

  const renderTitle = () => (
    <Typography variant="h5" gutterBottom align="center">
      {title}
    </Typography>
  );

  const renderFooter = () => (
    <div className={classes.footer}>
      {footerTitle && <Typography variant="caption">{footerTitle}</Typography>}
      {footerLinkUrl && (
        <Link className={classes.footerLink} to={footerLinkUrl}>
          {footerLinkText}
        </Link>
      )}
    </div>
  );

  return (
    <Paper elevation={2} className={classes.container}>
      {title && renderTitle()}
      {children}
      {withFooter && renderFooter()}
    </Paper>
  );
};

AuthFormPlate.defaultProps = {
  title: '',
  withFooter: false,
  footerTitle: '',
  footerLinkText: '',
  footerLinkUrl: '',
};

export default AuthFormPlate;
