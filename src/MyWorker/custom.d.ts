declare module 'worker-loader!*' {
    class WebpackWorker extends Worker {
        constructor();
    }

    export default WebpackWorker;
}


/* 
	how is worker defined? 
	how is the even type defined? 
*/