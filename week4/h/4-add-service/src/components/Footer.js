/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
