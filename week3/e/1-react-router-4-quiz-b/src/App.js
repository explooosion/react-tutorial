import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

// Router
import Login from './routers/Login';
import Home from './routers/Home';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      login: false,
    }
  }

  loginHandler = payload => {
    this.setState({ ...this.state, ...payload, login: true });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={(routeProps) => <Home {...routeProps} {...this.state} />} />
          <Route path="/login" render={(routeProps) => <Login {...routeProps} onLogin={this.loginHandler} />} />
        </div>
      </Router>
    );
  }
}

export default App;
