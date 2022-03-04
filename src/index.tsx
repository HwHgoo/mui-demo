import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Navigate, App } from './App';
import Login from './base/login';
import reportWebVitals from './reportWebVitals';
import MainPage from './base/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mainpage' element={<MainPage />}></Route>
        {/* <Route path='/' element={<Navigate></Navigate>}/> */}
      </Routes>
    </BrowserRouter>
    {/* <Login /> */}
    {/* <App /> */}
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
