import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    title: 'React',
    age: 18,
  }

  render() {
    console.log(this.props);
    return (
      <div className="App" style={{ color: 'red', backgroundColor: 'red' }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.title}</h1>
          {/* 若是在子元件註解要加 {}  */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;