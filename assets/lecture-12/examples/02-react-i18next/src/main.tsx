import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'modern-normalize';

import App from './App';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
