import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

// Router
import Home from './routers/Home';
import Dashboard from './routers/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="App-Menu">
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
          { /** exact 精確的 = 完全配對 */}
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
