import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Pages/App/App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


