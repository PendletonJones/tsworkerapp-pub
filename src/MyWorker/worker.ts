
// src/MyWorker/worker.ts

const ctx: Worker = self as any;

ctx.onmessage = (event) => {
    // ...
    console.log(event);
    ctx.postMessage('hello main thread');

    if(event.ports && event.ports[0]){
    	event.ports[0].onmessage = () => {
    		console.log('NOTICE THIS: message from the other side of the port');    		
    	}
    	event.ports[0].postMessage('sending a message through the port to the other worker');
    }
};
