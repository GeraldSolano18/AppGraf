/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routes/app';
import store from './redux/store';
import './assets/styles/App.scss';

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

