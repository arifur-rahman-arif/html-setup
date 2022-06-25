// @ts-ignore
import React from 'react';
import App from './App';

// @ts-ignore
// Loading the react dom from cdn
const root = ReactDOM.createRoot(
  document.getElementById('react_swiper') as HTMLElement
);

// @ts-ignore
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
