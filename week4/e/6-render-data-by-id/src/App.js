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

  state = {
    // 放個假的產品資料
    products: [
      { id: 1, name: '茉莉綠茶', price: 25, picture: 'https://i.imgur.com/E7zMHJB.png' },
      { id: 2, name: '阿薩姆紅茶', price: 25, picture: 'https://i.imgur.com/TopDBQD.png' },
      { id: 3, name: '黃金烏龍茶', price: 25, picture: 'https://i.imgur.com/uUVA7Tp.jpg' },
      { id: 4, name: '珍珠奶茶', price: 45, picture: 'https://i.imgur.com/DHxXogL.png' },
      { id: 5, name: '金桔檸檬', price: 55, picture: 'https://i.imgur.com/mnhqKp7.png' },
    ],
    title: 'React',
  }

  /**
   * 路由閘道
   * @param {array} routerProps render 預設傳的 props
   * @param {string} name 提供判斷載入的路由名稱
   * @param {array} payloadProps 想提取的資料
   */
  renderRoute(routerProps, name = '', payloadProps = []) {
    // 簡單版本 
    // let state = {};
    // payloadProps.forEach(p => state[p] = this.state[p]);

    // 困難版本 Pure Function
    const state = payloadProps.reduce((p, v) => { return { ...p, [v]: this.state[v] } }, {});

    switch (name) {
      default:
      case '': return <Home {...routerProps} {...state} />;
      case 'product': return <Product {...routerProps} {...state} />;
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            {/** <Route path="/" exact component={Home} /> */}
            {/** 改使用 render 傳資料 */}
            <Route path="/" exact render={props => this.renderRoute(props, '', ['products', 'title'])} />
            <Route path="/about" component={About} />
            {/** 我們需要的是有帶參數的，沒有參數的不該渲染 */}
            {/** <Route path="/product" render={props => this.renderRoute(props, 'product', ['products'])} /> */}
            {/** 當有帶參數的時候會觸發，:id 可自己定義 */}
            <Route path="/product/:id" render={props => this.renderRoute(props, 'product', ['products'])} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
