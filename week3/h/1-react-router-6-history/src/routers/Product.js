import React, { Component } from 'react';

class Product extends Component {

  onGoback() {
    this.props.history.push('/');
  }

  onGoToAbout() {
    this.props.history.push('/about');
  }

  render() {
    return (
      <div className="product">
        <button onClick={() => this.onGoback()}>Goback</button>
        <button onClick={() => this.onGoToAbout()}>GoToAbout</button>
      </div>
    );
  }
}

export default Product;
