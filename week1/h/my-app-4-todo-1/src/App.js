import React, { Component } from 'react';
import './App.scss';

import TodoAddForm from './components/TodoAddForm';
import TodoList from './components/TodoList';

class App extends Component {

  state = {
    list: [
      { name: 'Sleep', status: false },
      { name: 'Study', status: false },
      { name: 'Work', status: false }
    ]
  }

  add(name) {
    console.log(name);
  }

  render() {
    return (
      <div className="App">
        <TodoAddForm onAdd={this.add} />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
