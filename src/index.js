import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient  from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import App from './routes/App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <App />
);


