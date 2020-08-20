import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles(({spacing, palette, typography}: Theme) =>
  createStyles({
    submitButton: {
      marginTop: spacing(4),
    },
  }),
);

export default useStyles;
