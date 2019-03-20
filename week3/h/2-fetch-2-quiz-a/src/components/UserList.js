import React, { Component } from 'react';
import './UserList.scss';

import PropTypes from 'prop-types';

class UserList extends Component {
  renderUserList() {
    return this.props.list.map((item, index) => {
      const { id, name, username, email, website } = item;
      return (
        <tr key={`user-${index}`}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td><a href={`http://${website}`}>{website}</a></td>
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
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUserList()}
          </tbody>
        </table>
      </div>
    )
  }
}

UserList.defaultProps = {
  list: [],
}

UserList.propTypes = {
  list: PropTypes.array,
}

export default UserList;
