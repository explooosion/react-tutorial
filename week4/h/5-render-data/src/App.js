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
    this.state = {
      products: [],
      routes: [
        { key: 'root', path: '/', exact: true, component: Home },
        { key: 'product', path: '/product', exact: false, component: Product },
      ],
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

  renderRoutes(r) {
    const { key, exact, path, component: Component } = r;
    return (
      <Route
        key={`route-${key}`}
        exact={exact}
        path={path}
        render={(props) => <Component {...props} products={this.state.products} />}
      />
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {this.state.routes.map(r => this.renderRoutes(r))}
          {
            /**
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
            */
          }
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
