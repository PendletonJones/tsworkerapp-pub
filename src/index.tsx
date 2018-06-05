import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import MyWorker from './MyWorker';

const myWorker = new MyWorker();

myWorker.onmessage = event => {
    // ...
    console.log('event.data main thread', event.data);
};

myWorker.postMessage('hello worker');

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);




