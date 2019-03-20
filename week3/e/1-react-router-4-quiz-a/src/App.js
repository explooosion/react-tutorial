import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

// Router
import Manage from './routers/Manage';
import Home from './routers/Home';

class App extends Component {

  constructor() {
    super();
    this.state = {
      login: false
    }
  }

  renderDashboard() {
    return <Manage isLogin={this.state.login} />
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/manage"><button>Manage</button></Link>
          <Route path="/" exact component={Home} />
          <Route path="/manage" render={() => this.renderDashboard()} />
        </div>
      </Router>
    );
  }
}

export default App;
