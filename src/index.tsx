import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './components/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter Router={BrowserRouter} />
  </React.StrictMode>,
  document.getElementById('root')
);
