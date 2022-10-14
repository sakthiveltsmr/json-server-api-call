import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import"./plugin/initializer"


const root = ReactDOM.createRoot(document.getElementById('campaign-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

