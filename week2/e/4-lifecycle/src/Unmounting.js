import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = { show: true }
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => this.setState({ show: false })}>BUTTON</button>
                {this.state.show ? <Bpp /> : null}
            </div>
        );
    }
}

class Bpp extends Component {
    componentWillUnmount() {
        console.log('componentWillUnmount from Bpp');
    }
    render() {
        return <h2>React</h2>
    }
}

export default App;
