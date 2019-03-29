import React, { Component } from 'react';

class Home extends Component {
  render() {

    // 確認有沒有收到 props
    console.log(this.props);

    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

export default Home;