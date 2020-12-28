import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles(({spacing}: Theme) =>
  createStyles({
    error_message: {
      marginBottom: spacing(7),
    },
    main_wrap: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    text_container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
    },
  }),
);

export default useStyles;
