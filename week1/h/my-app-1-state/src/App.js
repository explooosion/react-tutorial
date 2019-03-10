import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     title: 'ReactJS',
  //     counter: 10,
  //   }
  // }

  state = {
    title: 'ReactJS',
    counter: 10,
  }

  add() {
    const counter = this.state.counter + 1;
    this.setState({ counter });
  }

  subtract() {
    const counter = this.state.counter - 1;
    this.setState({ counter });
  }

  timer() {

    this.time = setInterval(() => {
      if (this.state.counter > 0) {
        this.subtract();
      } else {
        clearInterval(this.time);
        alert('finish');
      }
    }, 1000);

    this.time = setInterval(() => {
      if (this.state.counter > 0) {
        const counter = this.state.counter - 1;
        this.setState({ counter });
      } else {
        clearInterval(this.time);
        alert('finish');
      }
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <input
          value={this.state.counter}
          onChange={(e) => { this.setState({ counter: e.target.value }) }}
        />
        <div>
          <button onClick={() => this.add()}>+</button>
          <button onClick={() => this.subtract()}>-</button>
        </div>
        <button onClick={() => this.timer()}>Start</button>
      </div>
    );
  }
}

export default App;
