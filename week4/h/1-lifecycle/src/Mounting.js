import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}

export default App;
