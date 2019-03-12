import React, { Component } from 'react';

import Example from './Example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Example list={['吃', '喝', '拉', '撒', '睡']} />
      </div>
    );
  }
}

export default App;
