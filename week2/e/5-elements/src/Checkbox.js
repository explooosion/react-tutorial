import React, { Component } from 'react';

class App extends Component {

  state = {
    isCheck: true,
  }

  layout = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }

  render() {
    return (
      <div className="App" style={this.layout}>
        <label htmlFor="lbCheck">Checkbox</label>
        <input
          id="lbCheck"
          type="checkbox"
          checked={this.state.isCheck}
          onChange={(e) => this.setState({ isCheck: e.target.checked })}
        />
      </div>
    );
  }
}

export default App;
