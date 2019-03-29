import React, { Component } from 'react';
import './Product.css';

import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <h2>Product</h2>
        <div className="group">
          <div className="group-picture">
            <img src="https://i.imgur.com/DHxXogL.png" alt="珍珠奶茶" height="400" />
          </div>
          <div className="group-detail">
            <div>品名：珍珠奶茶</div>
            <div>價格：45</div>
            <div className="group-goback"><Link to="/">回首頁</Link></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;