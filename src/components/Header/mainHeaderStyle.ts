import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles(({spacing}: Theme) =>
  createStyles({
    container: {
      backgroundColor: '#333',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `0 ${spacing(2)}px`,
      minHeight: 50,
      maxHeight: 50,
    },
    title: {
      color: '#fff',
    },
  }),
);
export default useStyles;
