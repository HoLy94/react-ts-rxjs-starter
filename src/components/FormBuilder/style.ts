import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles(({spacing}: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    submitButton: {
      marginTop: spacing(4),
    },
  }),
);

export default useStyles;
