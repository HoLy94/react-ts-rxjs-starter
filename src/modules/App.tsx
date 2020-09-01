import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router} from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

// App
import MainSwitch from './navigation/MainSwitch';

// HOCs
import withDarkMode, {WithThemeTypeProps} from './common/hoc/withDarkMode';

// Models
import {ThemePaletteTypeEnum} from './common/models';

// Actions
import {getIsDarkMode} from './common/store/actions';

const App: React.FC<WithThemeTypeProps> = (props) => {
  const {isDarkMode} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIsDarkMode());
  }, [dispatch]);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? ThemePaletteTypeEnum.DARK : ThemePaletteTypeEnum.LIGHT,
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainSwitch />
      </ThemeProvider>
    </Router>
  );
};

export default withDarkMode(App);
