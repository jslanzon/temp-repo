import React from 'react';
import ReactDOM from 'react-dom';

import './components/styles/global-styles.css';

import { Home } from './templates/Home/index';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

