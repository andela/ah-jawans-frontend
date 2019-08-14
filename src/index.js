import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import App from './components/App';

const store = configureStore();
render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
