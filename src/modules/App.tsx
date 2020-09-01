import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router} from 'react-router-dom';
import {Backdrop, CircularProgress} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

// Components
import MainSwitch from './navigation/MainSwitch';

// HOCs
import withDarkMode, {WithThemeTypeProps} from './common/hoc/withDarkMode';

// Models
import {ThemePaletteTypeEnum} from './common/models';

// Actions
import {attemptSignIn} from './auth/store/actions';
import {getIsDarkMode} from './common/store/actions';

// Selectors
import {isAppLoadingSelector} from './common/store/selectors';

const App: React.FC<WithThemeTypeProps> = (props) => {
  const {isDarkMode} = props;
  const dispatch = useDispatch();
  const isAppLoading = useSelector(isAppLoadingSelector);

  useEffect(() => {
    dispatch(attemptSignIn());
    dispatch(getIsDarkMode());
  }, [dispatch]);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? ThemePaletteTypeEnum.DARK : ThemePaletteTypeEnum.LIGHT,
    },
  });

  return (
    <Router>
      {isAppLoading ? (
        <Backdrop open={isAppLoading}>
          <CircularProgress />
        </Backdrop>
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainSwitch />
        </ThemeProvider>
      )}
    </Router>
  );
};

export default withDarkMode(App);
