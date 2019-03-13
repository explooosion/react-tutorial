import React, { Component } from 'react';

class Home extends Component {
  render() {

    console.log(this.props);
    return (
      <div className="home">
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
