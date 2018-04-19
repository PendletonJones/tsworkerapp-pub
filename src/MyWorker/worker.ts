
// src/MyWorker/worker.ts

const ctx: Worker = self as any;

ctx.onmessage = event => {
    // ...
    console.log(event);
    ctx.postMessage('hello main thread');
};
