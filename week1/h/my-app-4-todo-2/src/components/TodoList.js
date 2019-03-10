import React, { Component } from 'react';

class TodoList extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    // }

    render() {
        return (
            <div className="todolist">
                <ul>
                    {this.props.list.map(({ name, status }, index) => <li key={index}>{name}</li>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;
