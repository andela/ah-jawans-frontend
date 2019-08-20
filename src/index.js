import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';

const store = configureStore();
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
