import React, { Component } from 'react';
import './App.scss';

import TodoAddForm from './components/TodoAddForm';
import TodoList from './components/TodoList';

class App extends Component {

  state = {
    list: [
      { name: 'Sleep' },
      { name: 'Study' },
      { name: 'Work' }
    ],
  };

  add = (name) => {
    const list = this.state.list;
    list.push({ name });
    this.setState({ list });
  }

  remove = (key) => {
    const list = this.state.list;
    list.splice(key, 1);
    // const list = this.state.list.filter((value, index) => index !== key);
    this.setState({ list });
  }

  render() {
    return (
      <div className="App">
        <h1>React TodoList</h1>
        <TodoAddForm onAdd={this.add} />
        <TodoList
          list={this.state.list}
          onRemove={this.remove}
        />
      </div>
    );
  }
}

export default App;
