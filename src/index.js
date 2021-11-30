import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

//bootstrap setup
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter} from "react-router-dom";
ReactDOM.render( 
<React.StrictMode>
  <BrowserRouter>
  < App />
   </BrowserRouter>
  </React.StrictMode>,document.getElementById('root'));