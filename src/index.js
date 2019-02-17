import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const greetings = React.createElement('h1', {}, "Hello World!");

const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
}

const greetings = <h1>Hello World! Current Date: { getCurrentDate() }</h1>

ReactDOM.render(greetings, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
