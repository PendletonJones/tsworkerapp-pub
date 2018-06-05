import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import MyWorker from './MyWorker';

const myWorker = new MyWorker();

const mySecondWorker = new MyWorker();

const worker_channel = new MessageChannel();


/* first worker */
myWorker.onmessage = event => {
    // ...
    console.log('event from first worker', event.data);
};

myWorker.postMessage('hello to first worker from main');
myWorker.postMessage('sending over the port', [worker_channel.port1]);

/* second worker */

mySecondWorker.onmessage = event => {
	console.log('evnet from second worker', event.data)
}
mySecondWorker.postMessage('hello to second worker from main');
myWorker.postMessage('sending over the port to worker 2', [worker_channel.port2]);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
