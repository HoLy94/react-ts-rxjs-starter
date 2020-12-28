import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles(({spacing, breakpoints}: Theme) =>
  createStyles({
    container__main: {
      padding: spacing(2),
      maxWidth: breakpoints.values.xl,
    },
    container__auth: {
      minHeight: '100vh',
      maxHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loading_container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacing(4, 0),
    },
  }),
);

export default useStyles;
