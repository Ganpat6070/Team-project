import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Context from './Context';

import './index.css';
import App from './App';
import 'react-alice-carousel/lib/alice-carousel.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);

reportWebVitals();
