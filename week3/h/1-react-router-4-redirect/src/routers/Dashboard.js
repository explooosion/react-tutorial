import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Dashboard extends Component {
  state = {
    isLogin: false
  }

  render() {
    return this.state.isLogin
      ?
      <div className="about">
        <h1>Dashboard</h1>
      </div>
      : <Redirect to="/dashboard" />
  }
}

export default Dashboard;
