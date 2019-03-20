import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Link } from "react-router-dom";

import Users from './services/Users';
import UserList from './components/UserList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
      login: false,
    }
    this.getUserList();
  }

  // 使用 ES7 Async, Await
  async getUserList() {
    const list = await Users.get();
    this.setState({ list });
  }

  onLoginChange(login) {
    this.setState({ login });
  }

  renderUserlist = () => {
    return (
      <UserList
        list={this.state.list}
        isLogin={this.state.login}
      />
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/manage">Manage</Link>
          <br />
          Login:<input type="checkbox" checked={this.state.login} onChange={(e) => this.onLoginChange(e.target.checked)} />
          <Route path="/manage" render={this.renderUserlist} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
