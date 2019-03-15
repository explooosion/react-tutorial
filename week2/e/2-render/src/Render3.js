import React, { Component } from 'react';

class Example extends Component {

  constructor(props) {
    super(props);
    this.state = { isTeacher: true };
  }

  render() {
    // conditional operator
    return (
      <div>
        {
          this.state.isTeacher ? <h1>Teacher</h1> : <h1>Student</h1>
        }
        {
          this.state.isTeacher
            ? <h1>Teacher</h1>
            : <h1>Student</h1>
        }
        {this.state.isTeacher ? <h1>Teacher</h1> : <h1>Student</h1>}
      </div>
    );
  }
}

export default Example;
