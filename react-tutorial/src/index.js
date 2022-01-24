import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const helloWorld = React.createElement(
  'h1',
  {
    className:"site-heading"
  },
  'Hello World!'
) ;

ReactDOM.render(helloWorld, document.getElementById("root"));

/** import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); **/

