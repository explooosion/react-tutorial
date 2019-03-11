import React, { Component } from 'react';

class App extends Component {

  renderTeacher() {
    return <h1>Teacher</h1>;
  }

  render() {
    // functional render
    return (
      <div>
        {this.renderTeacher()}
      </div>
    );
  }
}

export default App;
