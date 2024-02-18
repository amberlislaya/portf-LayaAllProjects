import React from 'react';
import ReactDOM from 'react-dom'; // Corrección en la importación de ReactDOM
import App from './App.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
