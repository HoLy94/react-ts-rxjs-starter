import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles(({spacing, palette, typography}: Theme) =>
  createStyles({
    container: {
      padding: `${spacing(3)}px ${spacing(2)}px`,
      minWidth: 320,
      borderRadius: spacing(2),
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    submitButton: {
      marginTop: spacing(4),
    },
    footer: {
      paddingTop: spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footerLink: {
      ...typography.caption,
      color: palette.primary.main,
    },
  }),
);

export default useStyles;
