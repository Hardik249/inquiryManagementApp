import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'  
import LoginApp from './components/Login';
import Home from './components/home';
import Dashboard from './components/dashboard';
import VerifyJwtSession from './components/verifyJwtSession';
import CheckSession from './components/checkSession';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


// root.render(
  
//     <Router>
//       <Routes>
//         <Route index element={<App />} />
//         <Route path="/login" element={<LoginApp />} />
//         <Route path="/dashboard" element={<Home />} />
//       </Routes>
//     </Router>
  
// );
// ReactDOM.render(routing, document.getElementById('root'));  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
