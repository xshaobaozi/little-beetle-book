import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
const electron = window.electron;
const {ipcRenderer} = electron;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

ipcRenderer.on('handle-async-test-2', (event, arg) => {
    console.log(arg);
})
ipcRenderer.send('handle-async-test-1', '1');