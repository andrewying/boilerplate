import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.jQuery = jQuery;
window.$ = jQuery;

ReactDOM.render(<App />, document.getElementById('app'));
