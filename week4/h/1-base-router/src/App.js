/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from './routes/Home';
import Product from './routes/Product';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
            </ul>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product} />
          <footer>Power By Robby</footer>
        </div>
      </Router>
    );
  }
}

export default App;
