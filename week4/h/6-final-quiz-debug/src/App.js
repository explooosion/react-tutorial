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
    this.state = {
      products: []
    }
    this.getProducts();
  }

  /**
   * 取得產品資料
   */
  async getProducts() {
    const products = await ProductService.get();
    this.setState({ products });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exct Component={Home} />
          <Route path="/product" render={() => { return <Product products={this.state.products} /> }} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
