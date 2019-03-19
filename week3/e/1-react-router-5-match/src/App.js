import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

// Router
import Home from './routers/Home';
import Product from './routers/Product';

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
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/product/1">Product id=1</Link>
              </li>
              <li>
                <Link to="/product/2">Product id=2</Link>
              </li>
            </ul>
          </nav>
          { /** exact 精確的 = 完全配對 */}
          <Route path="/" exact component={Home} />
          <Route path="/product/" exact component={Product} />
          <Route path="/product/:id" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;
