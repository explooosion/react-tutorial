import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isTeacher: true, age: 19 };
  }

  render() {
    // logical && operator
    return (
      <div>
        {
          this.state.isTeacher && <h1>Teacher</h1>
        }
        {
          this.state.age > 18 && <h3>{'age > 18'}</h3>
        }
      </div>
    );
  }
}

export default App;
