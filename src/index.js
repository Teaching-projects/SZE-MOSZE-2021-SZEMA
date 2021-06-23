import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


/**
 * 
 * It's a test string
 * @type {string}
 */
const testString = "TestString";

/**
 * 
 * It's a test number
 * @type {number}
 */
 const testNumber = 5;


ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

