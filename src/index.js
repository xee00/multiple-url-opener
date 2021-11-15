import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// rendering the App compoenent into the root-div in public/index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
