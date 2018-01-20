import React from 'react';
import ReactDOM from 'react-dom';

import './global-styles';
import App from './app';

const root = document.createElement('div');

document.body.appendChild(root);

ReactDOM.render(<App />, root);
