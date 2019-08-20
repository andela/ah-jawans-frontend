import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
