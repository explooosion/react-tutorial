import React, { Component } from 'react';
import './App.css';

import Users from './services/Users';
import UserList from './components/UserList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
    }
    this.getUserList();
  }

  // 都沒使用
  // getUserList() {
  //   const list = Users.get();
  //   console.log(list);
  //   // Promise pedding 還在準備階段
  // }

  // 使用 ES6 Promise
  // getUserList() {
  //   Users.get().then(list => this.setState({ list }));
  //   const list = Users.get().then(list => this.setState({ list }));
  //   console.log(list);
  // }

  // 使用 ES7 Async, Await
  async getUserList() {
    const list = await Users.get();
    this.setState({ list });
    // console.log(list);
  }

  render() {
    return (
      <div className="App">
        <UserList list={this.state.list} />
      </div>
    );
  }
}

export default App;
