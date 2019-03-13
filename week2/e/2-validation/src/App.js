import React, { Component } from 'react';

import Example from './Example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Example list={[1, 2, 3]} />
      </div>
    );
  }
}

export default App;
