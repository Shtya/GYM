import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App';
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter ><App /></BrowserRouter>
);
