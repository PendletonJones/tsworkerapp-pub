import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component<{}, {}> {
    constructor(props: {}){
        super(props);
        this.pinchZoom = this.pinchZoom.bind(this);
    }
    public componentDidMount(){
           window.onwheel = this.pinchZoom;
    }
    public render() {
        return (
            <div 
                className="App">
                <header 
                    className="App-header">
                    <img 
                        src={logo} 
                        className="App-logo" 
                        alt="logo" />
                    <h1 
                        className="App-title">
                        Welcome to React
                    </h1>
                </header>
                <p 
                    className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
    private pinchZoom(event: WheelEvent){
        let zoom = 0;
        let offsetX = 0;
        let offsetY = 0;
        event.preventDefault();
        if (event.ctrlKey) {
            zoom += event.deltaY;
            console.log('zoom', zoom);
        } else {
            offsetX += event.deltaX * 2;
            offsetY -= event.deltaY * 2;
            console.log('offset', offsetX, offsetY);
        }
    }
}

export default App;
