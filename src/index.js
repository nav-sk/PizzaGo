import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


window.device = window.innerWidth<=600?"Mobile":"Desktop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
