import React, { Component } from 'react';

class Example extends Component {

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

export default Example;
