import React, { Component } from 'react';

class Product extends Component {
  render() {
    console.log(this.props.match)
    return (
      <div className="product">
        <h1>Product{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Product;
