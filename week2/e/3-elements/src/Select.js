import React, { Component } from 'react';

class Example extends Component {

  state = {
    list: [
      { name: 'book', value: 1 },
      { name: 'pen', value: 2 },
      { name: 'eraser', value: 3 },
    ],
    active: 1
  }

  layout = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    flexFlow: 'column'
  }

  renderList() {
    this.state.list.map(({ name, value }) =>
      <option key={`${name}-${value}`} value={value}>{name}</option>
    )
  }

  onListChange(value) {
    this.setState({ active: value });
  }

  render() {
    return (
      <div className="App" style={this.layout}>
        Select:{this.state.active}
        <select onChange={(e) => this.onListChange(e.target.value)}>
          {this.renderList()}
        </select>
      </div >
    );
  }
}

export default Example;
