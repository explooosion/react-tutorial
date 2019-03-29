import React, { Component } from 'react';
import './App.css';

// Routes
import Home from './routes/Home';
import Product from './routes/Product';
import About from './routes/About';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
