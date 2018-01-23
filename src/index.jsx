import './gtm-snippet.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './global-styles';
import App from './app';
import createStore from './store';

const root = document.createElement('div');
root.setAttribute('style', 'height: 100%;');

document.body.appendChild(root);

ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  root
);
