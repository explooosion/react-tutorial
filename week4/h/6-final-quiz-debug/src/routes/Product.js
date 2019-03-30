import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div>
        <h1>Product</h1>
        <ul>
          {this.props.products.map((p, index) => {
            return <li key={`p-${index}`}>{p.name}</li>
          })}
        </ul>
        <button onClick={this.props.history.goBack()}>回上一頁</button>
      </div>
    );
  }
}

export default Product;
