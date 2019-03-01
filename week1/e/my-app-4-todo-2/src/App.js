import React, { Component } from 'react';
import './App.scss';

import TodoAddForm from './components/TodoAddForm';
import TodoList from './components/TodoList';

class App extends Component {

  state = {
    list: [
      { name: 'Sleep' },
      { name: 'Study' },
      { name: 'Work' },
    ],
  };

  add = (name) => {
    const list = this.state.list;
    list.push({ name });
    this.setState({ list });
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
