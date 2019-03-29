import React, { Component } from 'react';
import './App.css';

import Home from './routes/Home';
import Product from './routes/Product';
import About from './routes/About';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />

          <footer>
            <p>COPYRIGHT © 2019 NUTC_JACK_LAB ALL RIGHTS RESERVED</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
