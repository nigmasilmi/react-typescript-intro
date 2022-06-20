<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
=======
import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// React 18
// const root = ReactDOM.createRoot(document.getElementById('root'));

// React 18 + TypeScript
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
>>>>>>> 14c45fdb4d8dabe02e2be1edd4d5658ecb1b4451
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<<<<<<< HEAD

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
>>>>>>> 14c45fdb4d8dabe02e2be1edd4d5658ecb1b4451
