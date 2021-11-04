import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './components/AppRouter';
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppRouter Router={BrowserRouter} />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
