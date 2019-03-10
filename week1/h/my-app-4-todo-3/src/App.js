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
    ],
  };

  add = (name) => {
    const list = [
      ...this.state.list,
      { ...name, status: false },
    ];
    // const list = this.state.list;
    // list.push({ ...name, status: false });
    this.setState({ list });
  }

  remove = (key) => {
    console.log(key);
    const list = this.state.list.filter((value, index) => index !== key);
    this.setState({ list });
  }

  // check = (key, status) => {
  //   const list = this.state.list.map((value, index) => {
  //     return (key === index) ? { ...value, status } : value;
  //   });
  //   this.setState({ list });
  // }

  render() {
    return (
      <div className="App">
        <h1>React TodoList</h1>
        <TodoAddForm onAdd={this.add} />
        <TodoList
          list={this.state.list}
          onRemove={this.remove}
          onCheck={this.check}
        />
        <div style={{ margin: '0 auto', width: '300px' }}>
          <hr />
          <p>All: {this.state.list.length}</p>
          <hr />
          <p>Active: {this.state.list.filter(({ status }) => !status).length}</p>
          <hr />
          <p>Completed: {this.state.list.filter(({ status }) => status).length}</p>
          {/* <p>Completed: {this.state.list.reduce((acc, { status }) => status ? acc + 1 : acc, 0)}</p> */}
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
