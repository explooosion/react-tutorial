import React, { Component } from 'react';

class Example extends Component {

  constructor(props) {
    super(props);
    this.state = { isTeacher: true };
  }

  render() {
    // preventing component from rendering
    return (
      <div>
        {
          this.state.isTeacher ? <h1>Teacher</h1> : null
        }
      </div>
    );
  }
}

export default Example;
