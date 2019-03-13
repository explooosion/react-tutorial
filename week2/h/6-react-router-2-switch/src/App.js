import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

// Router
import Home from './routers/Home';
import Product from './routers/Product';
import About from './routers/About';

// Router with Switch
import SwitchHome from './routers/SwitchHome';
import SwitchProduct from './routers/SwitchProduct';
import SwitchAbout from './routers/SwitchAbout';

// No Match
import NoMatch from './routers/NoMatch';

class App extends Component {
  render() {

    const someVariable = true;

    return (
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/test">NoMatch</Link>
            </li>
          </ul>
        </nav>
        { /** exact 精確的 = 完全配對 */}
        <Route path="/" exact component={Home} extra={someVariable} />
        <Route path="/product" component={Product} />
        <Route path="/about" component={About} />

        <Switch>
          <Route exact path="/" component={SwitchHome} />
          <Route path="/product" component={SwitchProduct} />
          <Route path="/about" component={SwitchAbout} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
