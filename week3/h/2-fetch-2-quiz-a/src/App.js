import React, { Component } from 'react';
import './App.css';

import Users from './services/Users';
import Todos from './services/Todos';
import UserList from './components/UserList';
import TodoList from './components/TodoList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
      todos: []
    }
    this.getUserList();
    this.getTodoList();
  }

  // 使用 ES7 Async, Await
  async getUserList() {
    const list = await Users.get();
    this.setState({ list });
    // console.log(list);
  }

  // 使用 ES7 Async, Await
  async getTodoList() {
    const todos = await Todos.get();
    this.setState({ todos });
    // console.log(list);
  }

  render() {
    return (
      <div className="App">
        <UserList list={this.state.list} />
        <TodoList list={this.state.todos} />
      </div>
    );
  }
}

export default App;
