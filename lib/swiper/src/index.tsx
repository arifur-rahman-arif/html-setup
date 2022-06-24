// @ts-ignore
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
