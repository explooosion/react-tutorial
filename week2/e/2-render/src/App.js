import React, { Component } from 'react';

import RenderExample from './Render1';

class App extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <RenderExample />
      </div>
    );
  }
}

export default App;
