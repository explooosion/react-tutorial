import React, { Component } from 'react';

class ExampleApp extends Component {

  constructor(props) {
    super(props);
    this.state = { isTeacher: true };
  }

  render() {
    // element variables
    let template = null;
    if (this.state.isTeacher) {
      template = (<h1>Teacher</h1>);
    } else {
      template = <h1>Student</h1>;
    }
    return template;
  }
}

export default Example;
