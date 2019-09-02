import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import main from './styles/main.css';
import home from './styles/home.css';
import library from './styles/library.css';
import profile from './styles/profile.css';
import sandbox from './styles/sandbox.css';
import signin from './styles/signin.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
