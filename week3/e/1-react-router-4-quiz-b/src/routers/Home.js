

import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Home</h2>
        {this.props.login ? <h3>Hi! {this.props.account}</h3> : null}
        {this.props.login ? <p>Your password is: {this.props.password}</p> : null}
        <Link to="/login"><button>登入</button></Link>
      </div>
    );
  }
}

Home.defaultProps = {
  login: false,
  account: '',
  password: '',
}

export default Home;
