

import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
    }
  }

  onLogin() {
    if (this.state.account.length === 0 || this.state.password.length === 0) return alert('請輸入帳號密碼');
    this.props.onLogin(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="about">
        <h2>Login</h2>
        <div>
          <label>帳號:</label>
          <input type="text" value={this.state.account} onChange={e => this.setState({ account: e.target.value })} />
        </div>
        <div>
          <label>密碼:</label>
          <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
        </div>
        <br />
        <button onClick={() => this.onLogin()}>送出</button>
      </div>
    );
  }
}

export default Login;
