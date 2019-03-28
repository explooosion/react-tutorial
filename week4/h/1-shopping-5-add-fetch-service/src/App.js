/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom"

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './routes/Home';
import Item from './routes/Item';

import ProductsService from './services/Products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
    this.getProducts();
  }

  async getProducts() {
    const products = await ProductsService.get();
    this.setState({ products });
  }

  renderHome = (routerProps) => {
    return <Home {...routerProps} products={this.state.products} />
  }

  renderItem = (routerProps) => {
    return <Item {...routerProps} products={this.state.products[0]} />
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Navbar />

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
                <Route path="/" exact render={this.renderHome} />
                <Route path="/item" render={this.renderItem} />
              </div>
            </div>
          </div>

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
