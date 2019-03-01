import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const list = [
            { name: 'Sleep', status: false },
            { name: 'Study', status: false },
            { name: 'Work', status: false }
        ];
        return (
            <div className="todolist">
                <ul>
                    {list.map(({ name }, index) => <li key={index}>{name}</li>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;
