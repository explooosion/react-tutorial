import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title: 'React'
        }
        console.log('constructor');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => this.setState({ title: 'LifeCycle' })}>BUTTON</button>
            </div>
        );
    }
}

export default App;
