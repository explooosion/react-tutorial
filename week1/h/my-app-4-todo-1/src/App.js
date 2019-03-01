import React, { Component } from 'react';
import './App.scss';

import TodoAddForm from './components/TodoAddForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoAddForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
