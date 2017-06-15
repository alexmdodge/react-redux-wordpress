/* Vendor Imports */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

/* Application Imports */
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Other Imports */
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.css';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
