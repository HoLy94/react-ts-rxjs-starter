import React from 'react';
import {render} from 'react-dom';

// App
import App from './modules/App';

// Workers
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
