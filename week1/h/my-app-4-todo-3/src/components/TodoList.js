import React, { Component } from 'react';
import './TodoList.scss';

class TodoList extends Component {

  removeItem(index) {
    this.props.onRemove(index);
  }

  checkItem(index, status) {
    this.props.onCheck(index, status);
  }

  render() {
    return (
      <div className="todolist" style={{ margin: '0 auto', width: '200px' }}>
        <ul style={{ padding: '0', listStyleType: 'none' }}>
          {
            this.props.list.map(({ status, name }, index) => {
              return (
                <li key={index}>
                  <input id={`todo-${index}`} type="checkbox" checked={status ? true : false} onChange={(e) => this.checkItem(index, e.target.checked)} />
                  <label htmlFor={`todo-${index}`} style={{ userSelect: 'none' }} >{name}</label>
                  <button onClick={() => this.removeItem(index)}>Delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
