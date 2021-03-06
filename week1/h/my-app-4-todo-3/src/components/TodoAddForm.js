import React, { Component } from 'react';

class TodoAddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  addItem = () => {
    if (this.state.name.length === 0) return;
    this.props.onAdd(this.state);
    this.setState({ name: '' });
    // alert(`create ${this.state.name}`);
  }

  render() {
    return (
      <div className="todo-add-form">
        <input
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

export default TodoAddForm;
