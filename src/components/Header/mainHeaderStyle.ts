import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles(({spacing, palette}: Theme) =>
  createStyles({
    container: {
      backgroundColor: palette.background.paper,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `0 ${spacing(2)}px`,
      minHeight: 50,
      maxHeight: 50,
    },
  }),
);
export default useStyles;
