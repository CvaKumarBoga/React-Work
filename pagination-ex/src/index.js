import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Paginate from './components/Paginate';
import Paginate1 from './components/Paginate1';
import Paginate2 from './components/Paginate2';
import Paginate3 from './components/Paginate3';
ReactDOM.render(
  <React.StrictMode>
    <Paginate/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
