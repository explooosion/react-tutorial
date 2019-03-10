import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: 'ReactJS',
    }
  }

  greet3() {
    alert('hi');
  }

  greet4 = () => {
    alert('hi' + this.state.title);
  }

  greet5() {
    // this
    alert(`hi ${this.state.title}`);
  }

  greet6() {
    alert(`hi ${this.state.title}`);
  }

  greet7(e) {
    // 常用做法
    alert(`hi ${e}`);
  }

  greet8 = (e) => {
    // 常用做法
    console.log(e);
    alert(`hi ${this.state.title}`);
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ color: '#f00' }}>{this.state.title}</h1>
        <br />
        <button onClick={() => alert('hi')}>Click_1</button>
        <button onClick={() => { alert('hi') }}>Click_2</button>
        <button onClick={this.greet3}>Click_3</button>
        <button onClick={this.greet4}>Click_4</button>
        <button onClick={this.greet5}>Click_5(x)</button>
        <button onClick={this.greet6.bind(this)}>Click_6</button>
        <button onClick={(e) => this.greet7(e)}>Click_7</button>
        <button onClick={this.greet8}>Click_8</button>
      </div>
    );
  }
}

export default App;
