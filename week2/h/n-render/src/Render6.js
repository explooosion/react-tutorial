import React, { Component } from 'react';

class App extends Component {

  renderTeacher() {
    return <h1>Teacher</h1>;
  }

  render() {
    // method
    return (
      <div>
        {this.renderTeacher()}
      </div>
    );
  }
}

export default App;
