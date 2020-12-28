import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Backdrop, CircularProgress} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

// Components
import MainSwitch from './navigation';

// Models
import {ThemePaletteTypeEnum} from './common/models';

// Actions
import {attemptSignIn} from './auth/sign-in/store/actions';
import {getParamsFromStorage} from './common/store/actions';

// Selectors
import {
  isAppLoadingSelector,
  isDarkModeSelector,
} from './common/store/selectors';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(isDarkModeSelector);
  const isAppLoading = useSelector(isAppLoadingSelector);

  useEffect(() => {
    dispatch(attemptSignIn.request());
    dispatch(getParamsFromStorage.request());
  }, [dispatch]);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? ThemePaletteTypeEnum.DARK : ThemePaletteTypeEnum.LIGHT,
    },
  });

  if (isAppLoading) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainSwitch />
    </ThemeProvider>
  );
};

export default App;
