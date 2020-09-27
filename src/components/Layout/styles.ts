import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles(({spacing}: Theme) =>
  createStyles({
    container__main: {
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
    },
    container__auth: {
      minHeight: '100vh',
      maxHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);

export default useStyles;
