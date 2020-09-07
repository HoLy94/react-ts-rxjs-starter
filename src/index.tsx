import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// App
import App from './modules/App';

// Workers
import * as serviceWorker from './serviceWorker';

// Store
import createReduxStoreWithEpic from './store';

// Constans
import {AppRoute} from './modules/navigation/constants';

const Root = () => (
  <Provider store={createReduxStoreWithEpic()}>
    <Router basename={AppRoute.Home}>
      <App />
    </Router>
  </Provider>
);

render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
