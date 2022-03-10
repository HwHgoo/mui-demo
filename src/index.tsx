import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routers from './router/routers'
import { Provider } from 'react-redux'
import store from './store/store'
import Test from './pages/test'
import {ThemeProvider, createTheme} from '@mui/material/styles'

const theme = createTheme();

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme} >
      <Test />
    </ThemeProvider>
  </Provider>

  ,rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
