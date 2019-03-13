import React, { Component } from 'react';

class Product extends Component {

  onGoback() {
    this.props.history.push()
  }

  render() {
    return (
      <div className="product">
        <button onClick={() => this.onGoback()}>Goback</button>
      </div>
    );
  }
}

export default Product;
