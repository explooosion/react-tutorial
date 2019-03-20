import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Manage extends Component {
  render() {
    if (!this.props.isLogin) {
      console.warn('you are not login.')
      return <Redirect to="/" />
    }
    return (
      <div className="manage">
        <h1>Manage</h1>
      </div>
    );
  }
}

export default Manage;
