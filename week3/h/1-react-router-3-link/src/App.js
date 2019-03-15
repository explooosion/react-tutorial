import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import './App.css';

// Router
import Home from './routers/Home';
import Product from './routers/Product';

class App extends Component {

  getRefLink(node) {
    // console.log(node);
  }

  onActive(router) {
    // console.log(router);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="App-Menu">
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/product?sort=name#the-hash">Product1</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/product",
                    search: "?sort=name",
                    hash: "#the-hash",
                    state: { fromDashboard: true }
                  }}
                >Product2</Link>
              </li>
              <li>
                {/** 測試：home > 1 > 3 > goback */}
                <Link to="/product" replace>Product3</Link>
              </li>
              <li>
                <Link to="/product" innerRef={this.getRefLink}>CallBack</Link>
              </li>
              <li>
                <NavLink
                  to="/product"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  isActive={this.onActive}
                >About</NavLink>
              </li>
            </ul>
          </nav>
          { /** exact 精確的 = 完全配對 */}
          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product} />
        </div>
      </Router >
    );
  }
}

export default App;
