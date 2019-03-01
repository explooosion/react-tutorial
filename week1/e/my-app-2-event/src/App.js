import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: 'ReactJS',
    }
  }

  greet2() {
    alert('hi');
  }

  greet3 = () => {
    alert('hi');
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ color: '#f00' }}>{this.state.title}</h1>
        <br />
        <button onClick={() => { alert('hi') }}>Click_1</button>
        <button onClick={this.greet2}>Click_2</button>
        <button onClick={this.greet3}>Click_3</button>
      </div>
    );
  }
}

export default App;
