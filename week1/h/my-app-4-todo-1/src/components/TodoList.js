import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div className="todolist">
        <ul>
          {this.props.list.map(({ name }, index) => <li key={index}>{name}</li>)}
        </ul>
      </div>
    );
  }
}

export default TodoList;
