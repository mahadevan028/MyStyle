import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'; 
import store from './redux/store.js';

ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


