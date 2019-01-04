import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import App from './App';
import '../scss/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
