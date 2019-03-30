/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
