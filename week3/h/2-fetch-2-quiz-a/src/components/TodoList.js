import React, { Component } from 'react';
import './TodoList.scss';

import PropTypes from 'prop-types';

class TodoList extends Component {
  renderTodoList() {
    return this.props.list.map((item, index) => {
      const { userId, id, title, completed } = item;
      return (
        <tr key={`user-${index}`}>
          <td>{userId}</td>
          <td>{id}</td>
          <td>{title}</td>
          <td><input type="checkbox" defaultChecked={completed} /></td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div className="user-list">
        <table border="1">
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTodoList()}
          </tbody>
        </table>
      </div>
    )
  }
}

TodoList.defaultProps = {
  list: [],
}

TodoList.propTypes = {
  list: PropTypes.array,
}

export default TodoList;
