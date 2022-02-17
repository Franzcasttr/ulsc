import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import AppProvider from './context/context';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
