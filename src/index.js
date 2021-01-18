import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from './context/context';
import './index.css';
// import contextReducer from '../context/contextReducer'
import App from './App'; 
import { SpeechProvider } from "@speechly/react-client";


ReactDOM.render(
    <Provider>
        <App /> 
    </Provider>, 
document.getElementById('root'));

