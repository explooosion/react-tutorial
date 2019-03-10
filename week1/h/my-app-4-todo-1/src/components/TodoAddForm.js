import React from 'react';

class TodoAddForm extends React.Component {

  state = {
    name: ''
  }

  render() {
    this.props.onAdd('asd');
    return (
      <div className="todo-add-form">
        <input value={this.state.name} />
        <button>Add</button>
      </div>
    );
  }
}

// const TodoAddForm = () => {
//   return (
//     <div className="todo-add-form">
//       <input />
//       <button>Add</button>
//     </div>
//   );
// }

export default TodoAddForm;
