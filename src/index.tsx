import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router} from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

// App
import App from './modules/App';

// Store
import createReduxStoreWithEpic from './store';

// Workers
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <Provider store={createReduxStoreWithEpic()}>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
