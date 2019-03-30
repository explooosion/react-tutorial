/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from './routes/Home';
import Item from './routes/Item';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">Start Bootstrap</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home
                  <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container">

            <div className="row">

              <div className="col-lg-3">
                <h1 className="my-4">Shop Name</h1>
                <div className="list-group">
                  <a href="#" className="list-group-item">Category 1</a>
                  <a href="#" className="list-group-item">Category 2</a>
                  <a href="#" className="list-group-item">Category 3</a>
                </div>
              </div>

              <div className="col-lg-9">
                <Route path="/" exact component={Home} />
                <Route path="/item" component={Item} />
              </div>
            </div>
          </div>

          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
            </div>
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
