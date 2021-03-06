import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'; 
import {store, persister} from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <BrowserRouter>
    <PersistGate persistor={persister}>
    <App />
    </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


