import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router} from 'react-router-dom';

// App
import App from './modules/App';

// Store
import createReduxStoreWithEpic from './store';

// Workers
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={createReduxStoreWithEpic()}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
