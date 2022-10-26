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

// class Popups {
  
//   constructor() {
//       this.run="running"
//       const root = ReactDOM.createRoot(document.getElementById('campaign-app'));
//       root.render(<App run={this.run} />);
//   }
//   }
//   new Popups()
