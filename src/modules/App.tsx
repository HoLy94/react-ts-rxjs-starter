import React from 'react';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router} from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

// App
import MainSwitch from './navigation/MainSwitch';

// Store
import createReduxStoreWithEpic from '../store';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <Provider store={createReduxStoreWithEpic()}>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainSwitch />
      </ThemeProvider>
    </Router>
  </Provider>
);

export default App;
