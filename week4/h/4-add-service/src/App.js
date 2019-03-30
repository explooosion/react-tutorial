/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom"

// Routes
import Home from './routes/Home';
import Product from './routes/Product';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Services
import ProductService from './services/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.getProducts();
  }

  async getProducts() {
    const products = await ProductService.get();
    console.log(products);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
