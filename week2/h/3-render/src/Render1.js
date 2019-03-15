import React, { Component } from 'react';

class Example extends Component {

  constructor(props) {
    super(props);
    this.state = { isTeacher: true };
  }

  render() {
    // javascript if
    if (this.state.isTeacher) {
      return (<h1>Teacher</h1>);
    } else {
      return <h1>Student</h1>;
    }
    // return <h1>Student</h1>;
  }
}

export default Example;
